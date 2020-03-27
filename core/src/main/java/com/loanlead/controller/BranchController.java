package com.loanlead.controller;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Branch;
import com.loanlead.models.ui.ModelEntityMapper;
import com.loanlead.models.ui.models.BranchModel;
import com.loanlead.services.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

//TODO Remake everything
@RestController
@RequestMapping(ReportController.PREFIX + "/branches")
public class BranchController {
    private BranchService branchService;
    private ModelEntityMapper mapper;

    @Autowired
    public BranchController(BranchService branchService, ModelEntityMapper mapper) {
        this.branchService = branchService;
        this.mapper = mapper;
    }

    @GetMapping
    public ResponseEntity<List<BranchModel>> branches(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        return ResponseEntity.of(Optional.of(branchService.findAll(page, itemsPerPage).stream().map(branch -> mapper.toModel(branch, BranchModel.class)).collect(Collectors.toList())));
    }

    @GetMapping("/count")
    public ResponseEntity<Integer> entitiesCount() {
        return ResponseEntity.of(Optional.of(branchService.findCount()));
    }

    @GetMapping("/unique")
    public ResponseEntity<Branch> isUnique(@RequestParam("fieldName") String name, @RequestParam("value") String value) {
        return ResponseEntity.of(Optional.ofNullable(branchService.findByFieldName(name, value)));
    }

    @GetMapping("/all")
    public ResponseEntity<List<BranchModel>> getAllBranches() {
        return branches(0, Integer.MAX_VALUE);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BranchModel> findBranch(@PathVariable Integer id) {
        return ResponseEntity.of(Optional.of(mapper.toModel(branchService.find(id), BranchModel.class)));
    }

    @PostMapping
    public ResponseEntity<BranchModel> postingBranch(@RequestBody BranchModel branch) {
        Branch branchEntity = this.branchService.save(mapper.toEntity(branch, Branch.class));
        return ResponseEntity.of(Optional.of(mapper.toModel(branchEntity, BranchModel.class)));
    }

    @PostMapping("/delete")
    public void delete(@RequestParam("ids") Integer[] ids) {
        branchService.deleteAllByIds(ids);
    }
}
