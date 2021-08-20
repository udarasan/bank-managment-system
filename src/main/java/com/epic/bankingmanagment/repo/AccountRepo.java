package com.epic.bankingmanagment.repo;

import com.epic.bankingmanagment.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AccountRepo extends JpaRepository<Account,Integer> {
    @Query(value = "select defaultAmount from Account where accountNo=?1",nativeQuery = true)
    double getAvailableAccBlanc(int id);

}
