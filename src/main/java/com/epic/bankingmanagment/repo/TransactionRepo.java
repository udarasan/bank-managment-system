package com.epic.bankingmanagment.repo;

import com.epic.bankingmanagment.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepo extends JpaRepository<Transaction,Integer> {
}
