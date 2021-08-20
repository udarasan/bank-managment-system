package com.epic.bankingmanagment.service;

import com.epic.bankingmanagment.dto.CustomerDTO;

import java.util.ArrayList;

public interface CustomerService {
    void registerCustomer(CustomerDTO dto);

    ArrayList<CustomerDTO> getAllCustomer();

    boolean cusIDAlreadyExists(int id);

    void deleteCustomer(int id);

    CustomerDTO searchCustomer(int id);

    void updateCustomer(CustomerDTO dto);
}
