package com.epic.bankingmanagment.repo;

import com.epic.bankingmanagment.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CustomerRepo extends JpaRepository<Customer,Integer> {

    @Query(value = "select count(customerID) from Customer" , nativeQuery = true)
    int getAvailableCustomerCount();


}
