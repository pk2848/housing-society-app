package com.housing.society.service;

import com.housing.society.model.Complaint;
import com.housing.society.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    public Optional<Complaint> getComplaintById(Long id) {
        return complaintRepository.findById(id);
    }

    public Complaint createComplaint(Complaint complaint) {
        return complaintRepository.save(complaint);
    }

    public Complaint updateComplaint(Long id, Complaint complaintDetails) {
        Complaint complaint = complaintRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Complaint not found with id " + id));
        complaint.setDescription(complaintDetails.getDescription());
        complaint.setStatus(complaintDetails.getStatus());
        complaint.setReportedBy(complaintDetails.getReportedBy());
        complaint.setHouse(complaintDetails.getHouse());
        return complaintRepository.save(complaint);
    }

    public void deleteComplaint(Long id) {
        complaintRepository.deleteById(id);
    }
}