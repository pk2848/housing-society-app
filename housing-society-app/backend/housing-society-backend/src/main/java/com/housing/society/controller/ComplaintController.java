package com.housing.society.controller;

import com.housing.society.model.Complaint;
import com.housing.society.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    @GetMapping
    public List<Complaint> getAllComplaints() {
        return complaintService.getAllComplaints();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Complaint> getComplaintById(@PathVariable Long id) {
        return complaintService.getComplaintById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Complaint createComplaint(@RequestBody Complaint complaint) {
        return complaintService.createComplaint(complaint);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Complaint> updateComplaint(@PathVariable Long id, @RequestBody Complaint complaintDetails) {
        return ResponseEntity.ok(complaintService.updateComplaint(id, complaintDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComplaint(@PathVariable Long id) {
        complaintService.deleteComplaint(id);
        return ResponseEntity.noContent().build();
    }
}