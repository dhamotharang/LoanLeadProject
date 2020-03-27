package com.loanlead.services;

import com.loanlead.auth.UserService;
import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Entity;
import com.loanlead.repositories.EntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.validation.constraints.NotNull;
import java.util.*;

@Service
public class EntityService {
    @Autowired
    private EntityRepository entityRepository;

    public Page<Entity> findAll() {
        return findAll(UserServiceImpl.DEFAULT_PAGE, UserServiceImpl.DEFAULT_ITEMS_PER_PAGE);
    }

    public Page<Entity> findAll(@NotNull Integer page, @NotNull Integer itemsPerPage) {
        Pageable pageable = PageRequest.of(page, itemsPerPage);
        return entityRepository.findAll(pageable);
    }

    public Integer findCount() {
        return entityRepository.findCount();
    }

    public Entity findByFieldName(String name, String value) {return (Entity) entityRepository.findOne(byColumnNameAndValue(name, value)).orElse(null); }

    public Entity find(@NotNull Integer id) {
        return entityRepository.findById(id).orElse(null);
    }

    public Entity save(Entity entity) {
        return this.entityRepository.save(entity);
    }

    public void delete(Entity entity) {
        this.entityRepository.delete(entity);
    }

    public void deleteById(Integer id) {
        this.entityRepository.deleteById(id);
    }

    public void deleteAllByIds(Integer[] ids) {
        this.entityRepository.deleteEntitiesByIds(new HashSet<>(Arrays.asList(ids)));
    }

    private static Specification<Entity> byColumnNameAndValue(String columnName, String value) {
        return (Root<Entity> root, CriteriaQuery<?> query, CriteriaBuilder builder) -> builder.equal(root.<String>get(columnName), value);
    }
}
