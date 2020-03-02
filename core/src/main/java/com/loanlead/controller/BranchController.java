package com.loanlead.controller;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Branch;
import com.loanlead.services.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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
    @ResponseBody
    public List<Branch> branches(@RequestParam("page") Integer page, @RequestParam("itemsPerPage") Integer itemsPerPage) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        return branchService.findAll(page, itemsPerPage).getContent();
    }

    @GetMapping("/{branchId}")
    public Branch findBranch(@PathVariable("branchId") Integer branchId) {
        return branchService.find(branchId);
    }

    @PostMapping("/branch")
    public Branch postingBranch(@Valid Branch branch) {
        return this.branchService.save(branch);
    }

    @PostMapping("/delete")
    public List<Branch> deleteBranches(@RequestParam("branchIds") Integer[] branchIds, @RequestParam("page") Integer page, @RequestParam("itemsPerPage") Integer itemsPerPage) {
        branchService.deleteAllByIds(branchIds);
        return branchService.findAll(page, itemsPerPage).getContent();
    }
}
