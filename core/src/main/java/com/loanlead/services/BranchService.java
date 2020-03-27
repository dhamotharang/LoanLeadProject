package com.loanlead.services;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Branch;
import com.loanlead.repositories.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.validation.constraints.NotNull;
import java.util.*;

@Service
public class BranchService {
    @Autowired
    BranchRepository branchRepository;

    public Iterable<Branch> findAll() {
        return branchRepository.findAll();
    }

    public List<Branch> findAll(@NotNull Integer page, @NotNull Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return branchRepository.findAll(pageable).getContent();
    }

    public Integer findCount() {
        return branchRepository.findCount();
    }

    public Branch findByFieldName(String name, String value) {
        return (Branch) branchRepository.findOne(byColumnNameAndValue(name, value)).orElse(null);
    }

    public Branch find(Integer id) {
        return branchRepository.findById(id).orElse(null);
    }

    public Branch save(Branch branch) {
        return this.branchRepository.save(branch);
    }

    public Branch update(Branch branch) {
        return this.branchRepository.save(branch);
    }

    public void delete(Branch branch) {
        this.branchRepository.delete(branch);
    }

    public void deleteById(Integer id) {
        this.branchRepository.deleteById(id);
    }

    public void deleteAllByIds(Integer[] ids) {
        this.branchRepository.deleteBranchesByIds(new HashSet<>(Arrays.asList(ids)));
    }

    private static Specification<Branch> byColumnNameAndValue(String columnName, String value) {
        return (Root<Branch> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> builder.equal(root.<String>get(columnName), value);
    }
}
