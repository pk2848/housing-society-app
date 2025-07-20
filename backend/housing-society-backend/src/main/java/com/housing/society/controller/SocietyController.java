package com.housing.society.controller;

import com.housing.society.model.Society;
import com.housing.society.service.SocietyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/societies")
public class SocietyController {

    @Autowired
    private SocietyService societyService;

    @GetMapping
    public List<Society> getAllSocieties() {
        return societyService.getAllSocieties();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Society> getSocietyById(@PathVariable Long id) {
        return societyService.getSocietyById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Society createSociety(@RequestBody Society society) {
        return societyService.createSociety(society);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Society> updateSociety(@PathVariable Long id, @RequestBody Society societyDetails) {
        return ResponseEntity.ok(societyService.updateSociety(id, societyDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSociety(@PathVariable Long id) {
        societyService.deleteSociety(id);
        return ResponseEntity.noContent().build();
    }
}