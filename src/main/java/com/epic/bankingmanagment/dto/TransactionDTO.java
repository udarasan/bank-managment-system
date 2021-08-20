package com.epic.bankingmanagment.dto;

import com.epic.bankingmanagment.entity.Account;
import com.epic.bankingmanagment.entity.TransactionType;
import com.epic.bankingmanagment.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class TransactionDTO {

    private int transactionID;
    private double amount;
    private String description;
    private String date;

    private Account accountNo;
    private User userID;
    private TransactionType transactionTypeID;
}
