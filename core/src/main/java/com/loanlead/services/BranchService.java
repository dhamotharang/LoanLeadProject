package com.loanlead.services;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Branch;
import com.loanlead.repositories.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.*;

@Service
public class BranchService {
    @Autowired
    BranchRepository branchRepository;

    public Page<Branch> findAll() {
        return findAll(UserServiceImpl.DEFAULT_PAGE, UserServiceImpl.DEFAULT_ITEMS_PER_PAGE);
    }

    public Page<Branch> findAll(@NotNull Integer page, @NotNull Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return branchRepository.findAll(pageable);
    }

    public Branch find(int id) {
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

    public void deleteById(int id) {
        this.branchRepository.deleteById(id);
    }

    public void deleteAllByIds(Integer[] ids) {
        this.branchRepository.deleteBranchesByIds(new HashSet<>(Arrays.asList(ids)));
    }
}
