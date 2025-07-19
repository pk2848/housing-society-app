package com.housing.society.service;

import com.housing.society.model.Society;
import com.housing.society.repository.SocietyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SocietyService {

    @Autowired
    private SocietyRepository societyRepository;

    public List<Society> getAllSocieties() {
        return societyRepository.findAll();
    }

    public Optional<Society> getSocietyById(Long id) {
        return societyRepository.findById(id);
    }

    public Society createSociety(Society society) {
        return societyRepository.save(society);
    }

    public Society updateSociety(Long id, Society societyDetails) {
        Society society = societyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Society not found with id " + id));
        society.setName(societyDetails.getName());
        society.getAddress(societyDetails.getAddress());
        return societyRepository.save(society);
    }

    public void deleteSociety(Long id) {
        societyRepository.deleteById(id);
    }
}