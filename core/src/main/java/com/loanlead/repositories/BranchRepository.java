package com.loanlead.repositories;

import com.loanlead.models.Branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Repository
public interface BranchRepository extends PagingAndSortingRepository<Branch, Integer> {
    @Modifying
    @Query("DELETE FROM Branch b WHERE b.id IN :ids")
    @Transactional
    void deleteBranchesByIds(@Param("ids") Set<Integer> ids);
}
