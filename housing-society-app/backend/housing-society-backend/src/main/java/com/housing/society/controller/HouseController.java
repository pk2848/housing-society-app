package com.housing.society.controller;

import com.housing.society.model.House;
import com.housing.society.service.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/houses")
public class HouseController {

    @Autowired
    private HouseService houseService;

    @GetMapping
    public List<House> getAllHouses() {
        return houseService.getAllHouses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<House> getHouseById(@PathVariable Long id) {
        return houseService.getHouseById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public House createHouse(@RequestBody House house) {
        return houseService.createHouse(house);
    }

    @PutMapping("/{id}")
    public ResponseEntity<House> updateHouse(@PathVariable Long id, @RequestBody House houseDetails) {
        return ResponseEntity.ok(houseService.updateHouse(id, houseDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHouse(@PathVariable Long id) {
        houseService.deleteHouse(id);
        return ResponseEntity.noContent().build();
    }
}