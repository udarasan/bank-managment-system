package com.epic.bankingmanagment.repo;


import com.epic.bankingmanagment.entity.Audit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuditRepo extends JpaRepository<Audit,Integer> {
}
