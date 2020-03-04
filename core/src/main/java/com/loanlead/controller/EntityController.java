package com.loanlead.controller;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Entity;
import com.loanlead.services.EntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(ReportController.PREFIX + "/entities")
public class EntityController {
    @Autowired
    private EntityService entityService;

    @GetMapping
    public ResponseEntity<List<Entity>> entities(@RequestParam("page") Integer page, @RequestParam("itemsPerPage") Integer itemsPerPage) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        return ResponseEntity.of(Optional.of(entityService.findAll(page, itemsPerPage).getContent()));
    }

    @GetMapping("/${entityId}")
    public ResponseEntity<Entity> findEntity(@PathVariable("entityId") Integer entityId) {
        return ResponseEntity.of(Optional.of(entityService.find(entityId)));
    }

    @PostMapping
    public void postingEntity(@RequestBody Entity entity) {
        entityService.save(entity);
    }

    @PostMapping("/delete")
    public List<Entity> deleteEntities(@RequestParam("deleteEntityId") Integer[] entityIds, @RequestParam("page") Integer page, @RequestParam("itemsPerPage") Integer itemsPerPage) {
        entityService.deleteAllByIds(entityIds);
        return entityService.findAll(page, itemsPerPage).getContent();
    }
}
