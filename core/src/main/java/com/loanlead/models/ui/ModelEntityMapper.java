package com.loanlead.models.ui;

import com.loanlead.auth.RoleService;
import com.loanlead.auth.UserService;
import com.loanlead.auth.entities.Role;
import com.loanlead.auth.entities.User;
import com.loanlead.models.*;
import com.loanlead.models.ui.models.*;
import com.loanlead.services.*;
import ma.glasnost.orika.CustomMapper;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.MappingContext;
import ma.glasnost.orika.impl.DefaultMapperFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public class ModelEntityMapper {
    private MapperFactory mapperFactory;

    @Autowired
    public ModelEntityMapper(
            RoleService roleService,
            BranchService branchService,
            EntityService entityService,
            LoanService loanService,
            CustomerService customerService,
            UserService userService,
            SecurityTypeService securityTypeService
    ) {
        mapperFactory = new DefaultMapperFactory.Builder().useAutoMapping(true).mapNulls(false).build();
        mapperFactory.classMap(UserModel.class, User.class)
                .byDefault()
                .customize(new CustomMapper<UserModel, User>() {
                    @Override
                    public void mapAtoB(UserModel userModel, User user, MappingContext context) {
                        user.setRoles(Stream.of(userModel.getRoles()).map(roleService::findByName).filter(Objects::nonNull).collect(Collectors.toSet()));
                        user.setBranches(Stream.of(userModel.getBranches()).map(branchName -> branchService.findByFieldName("name", branchName)).filter(Objects::nonNull).collect(Collectors.toSet()));

                        PhoneNumber phoneNumber;
                        if (userModel.getId() != null) {
                            phoneNumber = userService.find(userModel.getId()).getPhoneNumber();
                        } else {
                            phoneNumber = new PhoneNumber();
                        }
                        phoneNumber.setPhoneNumber(userModel.getPhoneNumber());
                        phoneNumber.setOptionalPhoneNumber(userModel.getOptionalPhoneNumber());
                        user.setPhoneNumber(phoneNumber);
                    }

                    @Override
                    public void mapBtoA(User user, UserModel userModel, MappingContext context) {
                        userModel.setBranches(user.getBranches().stream().map(Branch::getName).toArray(String[]::new));
                        userModel.setRoles(user.getRoles().stream().map(Role::getDisplayName).toArray(String[]::new));
                        userModel.setPhoneNumber(user.getPhoneNumber().getPhoneNumber());
                        userModel.setOptionalPhoneNumber(user.getPhoneNumber().getOptionalPhoneNumber());
                    }
                })
                .register();

        mapperFactory.classMap(BranchModel.class, Branch.class)
                .byDefault()
                .customize(new CustomMapper<BranchModel, Branch>() {
                    @Override
                    public void mapAtoB(BranchModel branchModel, Branch branch, MappingContext context) {
                        branch.setEntity(Stream.of(branchModel.getEntityName()).map(entityName -> entityService.findByFieldName("name", entityName)).findAny().orElse(null));
                    }

                    @Override
                    public void mapBtoA(Branch branch, BranchModel branchModel, MappingContext context) {
                        branchModel.setEntityName(branch.getEntity().getName());
                    }
                })
                .register();

        mapperFactory.classMap(LoanProductModel.class, LoanProduct.class)
                .byDefault()
                .register();

        mapperFactory.classMap(CustomerModel.class, Customer.class)
                .byDefault()
                .customize(new CustomMapper<CustomerModel, Customer>() {
                    @Override
                    public void mapAtoB(CustomerModel customerModel, Customer customer, MappingContext context) {
                        PhoneNumber phoneNumber;
                        if (customerModel.getId() != null) {
                            phoneNumber = customerService.find(customerModel.getId()).getPhoneNumber();
                        } else {
                            phoneNumber = new PhoneNumber();
                        }
                        phoneNumber.setPhoneNumber(customerModel.getPhoneNumber());
                        phoneNumber.setOptionalPhoneNumber(customerModel.getOptionalPhoneNumber());
                        customer.setPhoneNumber(phoneNumber);
                    }

                    @Override
                    public void mapBtoA(Customer customer, CustomerModel customerModel, MappingContext context) {
                        customerModel.setPhoneNumber(customer.getPhoneNumber().getPhoneNumber());
                        customerModel.setOptionalPhoneNumber(customer.getPhoneNumber().getOptionalPhoneNumber());
                        customerModel.setLoans(loanService.findLoansByCustomerId(customer.getId()).stream().map(loan -> toModel(loan, LoanModel.class)).collect(Collectors.toList()));
                    }
                })
                .register();

        mapperFactory.classMap(LoanModel.class, Loan.class)
                .byDefault()
                .customize(new CustomMapper<LoanModel, Loan>() {
                    @Override
                    public void mapAtoB(LoanModel loanModel, Loan loan, MappingContext context) {
                        loan.setLoanProduct(toEntity(loanModel.getLoanProduct(), LoanProduct.class));
                        loan.setCustomer(customerService.findByFieldName("name", loanModel.getCustomer()));
                        loan.setSecurityTypes(loanModel.getSecurityTypes().stream().map(securityTypeService::findBySecurityType).collect(Collectors.toList()));
                    }

                    @Override
                    public void mapBtoA(Loan loan, LoanModel loanModel, MappingContext context) {
                        loanModel.setLoanProduct(toModel(loan.getLoanProduct(), LoanProductModel.class));
                        loanModel.setCustomer(loan.getCustomer().getName());
                        loanModel.setSecurityTypes(loan.getSecurityTypes().stream().map(SecurityType::getSecurityType).collect(Collectors.toList()));
                    }
                })
                .register();

        mapperFactory.classMap(ReportModel.class, Report.class)
                .byDefault()
                .customize(new CustomMapper<ReportModel, Report>() {
                    @Override
                    public void mapBtoA(Report report, ReportModel reportModel, MappingContext context) {
                        reportModel.setUser(report.getActionedBy().getFullName());
                        reportModel.setBranches(report.getActionedBy().getBranches().stream().map(Branch::getName).toArray(String[]::new));
                        reportModel.setStage(report.getRole().getDisplayName());
                        reportModel.setCustomer(report.getLoan().getCustomer().getName());
                    }
                })
                .register();
    }

    @SuppressWarnings("unchecked")
    public <E extends EntityModel, M extends UiModel> E toEntity(M model, Class<E> entityClass) {
        return mapperFactory.getMapperFacade((Class<M>) model.getClass(), entityClass).map(model);
    }

    @SuppressWarnings("unchecked")
    public <E extends EntityModel, M extends UiModel> E toEntity(M model, E entity) {
        return mapperFactory.getMapperFacade((Class<M>) model.getClass(), (Class<E>) entity.getClass()).map(model, entity);
    }

    @SuppressWarnings("unchecked")
    public <M extends UiModel, E extends EntityModel> M toModel(E entity, Class<M> modelClass) {
        return mapperFactory.getMapperFacade((Class<E>) entity.getClass(), modelClass).map(entity);
    }

    @SuppressWarnings("unchecked")
    public <M extends UiModel, E extends EntityModel> M toModel(E entity, M model) {
        return mapperFactory.getMapperFacade((Class<E>) entity.getClass(), (Class<M>) model.getClass()).map(entity, model);
    }
}
