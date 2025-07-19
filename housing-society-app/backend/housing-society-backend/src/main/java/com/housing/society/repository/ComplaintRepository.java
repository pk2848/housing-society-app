package com.housing.society.repository;
import com.housing.society.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
}