package com.epic.bankingmanagment.repo;

import com.epic.bankingmanagment.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepo extends JpaRepository<Account,Integer> {
}
