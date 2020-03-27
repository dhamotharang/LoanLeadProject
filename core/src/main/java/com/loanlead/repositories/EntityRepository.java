package com.loanlead.repositories;

import com.loanlead.models.Entity;
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
public interface EntityRepository extends JpaRepository<Entity, Integer>, JpaSpecificationExecutor {
    @Modifying
    @Query("DELETE FROM Entity e WHERE e.id IN :ids")
    @Transactional
    void deleteEntitiesByIds(@Param("ids") Set<Integer> ids);

    @Query("SELECT COUNT(e) FROM Entity e")
    Integer findCount();

    @Query(nativeQuery = true, value = "SELECT * FROM entities WHERE entities.:fieldName = :fieldValue")
    Entity findByFieldName(@Param("fieldName") String name, @Param("fieldValue") String value);
}
