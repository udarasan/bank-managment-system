package com.epic.bankingmanagment.service;

import com.epic.bankingmanagment.dto.TransactionDTO;

public interface TransactionService {
    void doTransaction(TransactionDTO dto);
}
