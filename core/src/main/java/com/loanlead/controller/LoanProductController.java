package com.loanlead.controller;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.LoanProduct;
import com.loanlead.models.ui.ModelEntityMapper;
import com.loanlead.models.ui.models.LoanProductModel;
import com.loanlead.services.LoanProductService;
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
@RequestMapping(ReportController.PREFIX + "/loan-products")
public class LoanProductController {
    private LoanProductService loanProductService;
    private ModelEntityMapper mapper;

    @Autowired
    public LoanProductController(LoanProductService loanProductService, ModelEntityMapper mapper) {
        this.loanProductService = loanProductService;
        this.mapper = mapper;
    }

    @GetMapping
    public ResponseEntity<List<LoanProductModel>> loanProducts(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        return ResponseEntity.of(Optional.of(loanProductService.findAll(page, itemsPerPage).stream().map(loanProduct -> mapper.toModel(loanProduct, LoanProductModel.class)).collect(Collectors.toList())));
    }

    @GetMapping("/count")
    public ResponseEntity<Integer> entitiesCount() {
        return ResponseEntity.of(Optional.of(loanProductService.findCount()));
    }

    @GetMapping("/unique")
    public ResponseEntity<LoanProduct> isUnique(@RequestParam("fieldName") String name, @RequestParam("value") String value) {
        return ResponseEntity.of(Optional.ofNullable(loanProductService.findByFieldName(name, value)));
    }

    @GetMapping("/all")
    public ResponseEntity<List<LoanProductModel>> getAllLoanProducts() {
        return loanProducts(0, Integer.MAX_VALUE);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoanProductModel> findLoanProduct(@PathVariable Integer id) {
        return ResponseEntity.of(Optional.of(mapper.toModel(loanProductService.find(id), LoanProductModel.class)));
    }

    @PostMapping
    public ResponseEntity<LoanProductModel> postingLoanProduct(@RequestBody LoanProductModel loanProduct) {
        LoanProduct loanProductEntity = this.loanProductService.save(mapper.toEntity(loanProduct, LoanProduct.class));
        return ResponseEntity.of(Optional.of(mapper.toModel(loanProductEntity, LoanProductModel.class)));
    }

    @PostMapping("/delete")
    public void delete(@RequestParam("ids") Integer[] ids) {
        loanProductService.deleteAllByIds(ids);
    }
}
