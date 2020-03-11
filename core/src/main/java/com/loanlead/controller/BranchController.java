package com.loanlead.controller;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Branch;
import com.loanlead.services.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

//TODO Remake everything
@RestController
@RequestMapping(ReportController.PREFIX + "/branches")
public class BranchController {
    private BranchService branchService;

    @Autowired
    public BranchController(BranchService branchService) {
        this.branchService = branchService;
    }

    @GetMapping
    public ResponseEntity<List<Branch>> branches(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        return ResponseEntity.of(Optional.of(branchService.findAll(page, itemsPerPage)));
    }

    @GetMapping("/{branchId}")
    public ResponseEntity<Branch> findBranch(@PathVariable("branchId") String branchId) {
        return ResponseEntity.of(Optional.of(branchService.find(branchId)));
    }

    @PostMapping
    public ResponseEntity<Branch> postingBranch(@Valid Branch branch) {
        return ResponseEntity.of(Optional.of(this.branchService.save(branch)));
    }

    @PostMapping("/delete")
    public ResponseEntity<List<Branch>> deleteBranches(@RequestParam("branchIds") Integer[] branchIds, @RequestParam("page") Integer page, @RequestParam("itemsPerPage") Integer itemsPerPage) {
        branchService.deleteAllByIds(branchIds);
        return ResponseEntity.of(Optional.of(branchService.findAll(page, itemsPerPage)));
    }
}
