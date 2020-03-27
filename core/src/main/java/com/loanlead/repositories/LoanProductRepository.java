package com.loanlead.repositories;

import com.loanlead.models.LoanProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Repository
public interface LoanProductRepository extends JpaRepository<LoanProduct, Integer>, JpaSpecificationExecutor {
    @Modifying
    @Query("DELETE FROM LoanProduct lp WHERE lp.id IN :ids")
    @Transactional
    void deleteLoanProductsByIds(@Param("ids") Set<Integer> ids);

    @Query("SELECT COUNT(lp) FROM LoanProduct lp")
    Integer findCount();

    @Query(nativeQuery = true, value = "SELECT * FROM loan_products WHERE loan_products.:fieldName = :fieldValue")
    LoanProduct findByFieldName(@Param("fieldName") String name, @Param("fieldValue") String value);
}
