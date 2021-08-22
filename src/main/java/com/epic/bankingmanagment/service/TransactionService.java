package com.epic.bankingmanagment.service;

import com.epic.bankingmanagment.dto.AccountDTO;
import com.epic.bankingmanagment.dto.CustomerDTO;
import com.epic.bankingmanagment.dto.TransactionDTO;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;

public interface TransactionService {
    void doTransaction(TransactionDTO dto);
    ArrayList<TransactionDTO> getAllTransactions();
    TransactionDTO searchTransaction(int id);
}
