package com.loanlead.controller;

import com.loanlead.auth.UserServiceImpl;
import com.loanlead.models.Entity;
import com.loanlead.services.EntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(ReportController.PREFIX + "/entities")
public class EntityController {
    @Autowired
    private EntityService entityService;

    @GetMapping
    public List<Entity> entities(@RequestParam("page") Integer page, @RequestParam("itemsPerPage") Integer itemsPerPage) {
        if (page == null) {
            page = UserServiceImpl.DEFAULT_PAGE;
        }

        if (itemsPerPage == null) {
            itemsPerPage = UserServiceImpl.DEFAULT_ITEMS_PER_PAGE;
        }

        return entityService.findAll(page, itemsPerPage).getContent();
    }

    @GetMapping("/${entityId}")
    public Entity findEntity(@PathVariable("entityId") Integer entityId) {
        return entityService.find(entityId);
    }

    @PostMapping
    public Entity postingEntity(Entity entity) {
        return entityService.save(entity);
    }

    @PostMapping("/delete")
    public List<Entity> deleteEntities(@RequestParam("deleteEntityId") Integer[] entityIds, @RequestParam("page") Integer page, @RequestParam("itemsPerPage") Integer itemsPerPage) {
        entityService.deleteAllByIds(entityIds);
        return entityService.findAll(page, itemsPerPage).getContent();
    }
}
