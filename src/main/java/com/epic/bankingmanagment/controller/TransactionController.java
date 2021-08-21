package com.epic.bankingmanagment.controller;

import com.epic.bankingmanagment.dto.CustomerDTO;
import com.epic.bankingmanagment.dto.TransactionDTO;
import com.epic.bankingmanagment.service.TransactionService;
import com.epic.bankingmanagment.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("api/v1/transaction")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @PostMapping(path = "/doTransaction", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity doTransaction(@RequestBody TransactionDTO dto) {
        transactionService.doTransaction(dto);
        return new ResponseEntity(new StandardResponse("201", "Done", dto), HttpStatus.CREATED);
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllCustomer() {
        ArrayList<TransactionDTO> allTransactions = transactionService.getAllTransactions();
        return new ResponseEntity(new StandardResponse("200", "Done", allTransactions), HttpStatus.OK);
    }
}
