package com.epic.bankingmanagment.service.impl;

import com.epic.bankingmanagment.dto.CustomerDTO;
import com.epic.bankingmanagment.entity.Customer;
import com.epic.bankingmanagment.exception.ValidateException;
import com.epic.bankingmanagment.repo.CustomerRepo;
import com.epic.bankingmanagment.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private CustomerRepo customerRepo;

    @Override
    public void registerCustomer(CustomerDTO dto) {
        customerRepo.save(mapper.map(dto, Customer.class));
    }

    @Override
    public ArrayList<CustomerDTO> getAllCustomer() {
        List<Customer> all=customerRepo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<CustomerDTO>>(){}.getType());
    }

    @Override
    public boolean cusIDAlreadyExists(int id) {
        return customerRepo.existsById(id);
    }

    @Override
    public void deleteCustomer(int id) {
        if (!customerRepo.existsById(id)){
            throw new ValidateException("No Account For This Account Number!");
        }
        customerRepo.deleteById(id);

    }

    @Override
    public CustomerDTO searchCustomer(int id) {
        Optional<Customer> customer = customerRepo.findById(id);
        if (customer.isPresent()) {
            return mapper.map(customer.get(), CustomerDTO.class);
        }
        return null;
    }

    @Override
    public void updateCustomer(CustomerDTO dto) {
        if (customerRepo.existsById(dto.getCustomerID())) {
            customerRepo.save(mapper.map(dto, Customer.class));

        }
    }

    @Override
    public int getAvailableCustomerCount() {
        return customerRepo.getAvailableCustomerCount();
    }
}
