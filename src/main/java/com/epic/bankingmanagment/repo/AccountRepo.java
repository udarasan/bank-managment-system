package com.epic.bankingmanagment.repo;

import com.epic.bankingmanagment.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface AccountRepo extends JpaRepository<Account,Integer> {

    @Query(value = "select accountTypeID from Account where accountNo=?1",nativeQuery = true)
    int getAccountTypeID(int id);

    @Query(value = "select defaultAmount from Account where accountNo=?1",nativeQuery = true)
    double getAvailableAccBlanc(int id);

    @Modifying
    @Query(value = "update Account set defaultAmount =?1 where accountNo=?2",nativeQuery = true)
    void updateAccountAmount(double updateAmount,int accountNo);

    @Query(value = "select count(accountNo) from Account" , nativeQuery = true)
    int getAvailableAccountCount();

    /*UPDATE Customers
    SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
    WHERE CustomerID = 1;*/

}
