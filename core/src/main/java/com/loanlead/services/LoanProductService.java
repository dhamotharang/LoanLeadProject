package com.loanlead.services;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.LoanProduct;
import com.loanlead.repositories.LoanProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;

@Service
public class LoanProductService {
    @Autowired
    private LoanProductRepository loanProductRepository;

    public Page<LoanProduct> findAll() {
        return findAll(UserServiceImpl.DEFAULT_PAGE, UserServiceImpl.DEFAULT_ITEMS_PER_PAGE);
    }

    public Page<LoanProduct> findAll(@NotNull Integer page, @NotNull Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return loanProductRepository.findAll(pageable);
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

    public void deleteById(int id) {
        this.loanProductRepository.deleteById(id);
    }
}
