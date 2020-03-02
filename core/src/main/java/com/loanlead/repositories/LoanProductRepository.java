package com.loanlead.repositories;

import com.loanlead.models.LoanProduct;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanProductRepository extends PagingAndSortingRepository<LoanProduct, Integer> {

}
