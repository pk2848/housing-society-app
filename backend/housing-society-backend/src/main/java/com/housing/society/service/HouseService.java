package com.housing.society.service;

import com.housing.society.model.House;
import com.housing.society.repository.HouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HouseService {

    @Autowired
    private HouseRepository houseRepository;

    public List<House> getAllHouses() {
        return houseRepository.findAll();
    }

    public Optional<House> getHouseById(Long id) {
        return houseRepository.findById(id);
    }

    public House createHouse(House house) {
        return houseRepository.save(house);
    }

    public House updateHouse(Long id, House houseDetails) {
        House house = houseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("House not found with id " + id));
        house.setHouseNumber(houseDetails.getHouseNumber());
        house.setOwnerName(houseDetails.getOwnerName());
        house.setSociety(houseDetails.getSociety());
        return houseRepository.save(house);
    }

    public void deleteHouse(Long id) {
        houseRepository.deleteById(id);
    }

    public List<House> searchHousesByOwnerName(String ownerName) {
        // This would require a custom query in the repository
        return null; // Placeholder
    }
}