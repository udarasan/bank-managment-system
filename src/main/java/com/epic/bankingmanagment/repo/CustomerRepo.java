package com.epic.bankingmanagment.repo;

import com.epic.bankingmanagment.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<Customer,Integer> {
}
