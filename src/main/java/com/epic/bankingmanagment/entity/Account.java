package com.epic.bankingmanagment.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Account {
    @Id
    private int accountNo;
    private String accountName;
    private String openDate;
    private double defaultAmount;

    @ManyToOne
    @JoinColumn(name = "accountTypeID",referencedColumnName = "accountTypeID")
    private AccountType accountTypeID;

    @ManyToOne
    @JoinColumn(name = "customerID",referencedColumnName = "customerID")
    private Customer customerID;

}
