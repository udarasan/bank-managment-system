package com.epic.bankingmanagment.controller;

import com.epic.bankingmanagment.service.AccountService;
import com.epic.bankingmanagment.service.CustomerService;
import com.epic.bankingmanagment.service.UserService;
import com.epic.bankingmanagment.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/dashboard")
@CrossOrigin
public class DashBoardController {
    @Autowired
    private AccountService accountService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private UserService userService;

    @GetMapping(path = "/customerCount",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getCustomerCount() {
        int customerCount = customerService.getAvailableCustomerCount();
        return new ResponseEntity(new StandardResponse("200", "Done", customerCount), HttpStatus.OK);
    }
    @GetMapping(path = "/accountCount",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAccountCount() {
        int accountCount = accountService.getAvailableAccountCount();
        return new ResponseEntity(new StandardResponse("200", "Done", accountCount), HttpStatus.OK);
    }
    @GetMapping(path = "/employeeCount",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getEmployeeCount() {
        int employeeCount = userService.getAvailableEmployeeCount();
        return new ResponseEntity(new StandardResponse("200", "Done", employeeCount), HttpStatus.OK);
    }
}
