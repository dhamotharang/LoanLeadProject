package com.loanlead.services;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.LoanProduct;
import com.loanlead.models.PhoneNumber;
import com.loanlead.repositories.LoanProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.validation.constraints.NotNull;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@Service
public class LoanProductService {
    @Autowired
    private LoanProductRepository loanProductRepository;

    public List<LoanProduct> findAll() {
        return findAll(UserServiceImpl.DEFAULT_PAGE, UserServiceImpl.DEFAULT_ITEMS_PER_PAGE);
    }

    public List<LoanProduct> findAll(@NotNull Integer page, @NotNull Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return loanProductRepository.findAll(pageable).getContent();
    }

    public Integer findCount() {
        return loanProductRepository.findCount();
    }

    public LoanProduct findByFieldName(String name, String value) {
        return (LoanProduct) loanProductRepository.findOne(byColumnNameAndValue(name, value)).orElse(null);
    }

    public LoanProduct find(@NotNull Integer id) {
        return loanProductRepository.findById(id).orElse(null);
    }

    public LoanProduct save(LoanProduct loanProduct) {
        return this.loanProductRepository.save(loanProduct);
    }

    public void delete(LoanProduct loanProduct) {
        this.loanProductRepository.delete(loanProduct);
    }

    public void deleteById(Integer id) {
        this.loanProductRepository.deleteById(id);
    }

    public void deleteAllByIds(Integer[] ids) {
        this.loanProductRepository.deleteLoanProductsByIds(new HashSet<>(Arrays.asList(ids)));
    }

    private static Specification<LoanProduct> byColumnNameAndValue(String columnName, String value) {
        return (Root<LoanProduct> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> builder.equal(root.<String>get(columnName), value);
    }
}
