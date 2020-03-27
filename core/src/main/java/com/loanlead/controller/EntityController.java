package com.loanlead.controller;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Entity;
import com.loanlead.services.EntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping(ReportController.PREFIX + "/entities")
public class EntityController {
    @Autowired
    private EntityService entityService;

    @GetMapping
    public ResponseEntity<List<Entity>> entities(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "itemsPerPage", required = false) Integer itemsPerPage) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        return ResponseEntity.of(Optional.of(entityService.findAll(page, itemsPerPage).getContent()));
    }

    @GetMapping("/count")
    public ResponseEntity<Integer> entitiesCount() {
        return ResponseEntity.of(Optional.of(entityService.findCount()));
    }

    @GetMapping("/unique")
    public ResponseEntity<Entity> isUnique(@RequestParam("fieldName") String name, @RequestParam("value") String value) {
        return ResponseEntity.of(Optional.ofNullable(entityService.findByFieldName(name, value)));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Entity>> getAllEntities() {
        return entities(0, Integer.MAX_VALUE);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Entity> findEntity(@PathVariable Integer id) {
        return ResponseEntity.of(Optional.of(entityService.find(id)));
    }

    @PostMapping
    public ResponseEntity<Entity> postingEntity(@RequestBody Entity entity) {
        return ResponseEntity.of(Optional.of(entityService.save(entity)));
    }

    @PostMapping("/delete")
    public void delete(@RequestParam("ids") Integer[] ids) {
        entityService.deleteAllByIds(ids);
    }
}
