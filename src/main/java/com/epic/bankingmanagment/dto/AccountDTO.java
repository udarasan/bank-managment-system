package com.epic.bankingmanagment.dto;

import com.epic.bankingmanagment.entity.AccountType;
import com.epic.bankingmanagment.entity.Customer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class AccountDTO {

    private int accountNo;
    private String accountName;
    private String openDate;
    private double defaultAmount;

    private AccountType accountTypeID;
    private Customer customerID;

}
