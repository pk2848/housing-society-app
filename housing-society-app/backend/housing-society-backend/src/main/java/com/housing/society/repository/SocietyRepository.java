package com.housing.society.repository;

import com.housing.society.model.Society;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SocietyRepository extends JpaRepository<Society, Long> {
}