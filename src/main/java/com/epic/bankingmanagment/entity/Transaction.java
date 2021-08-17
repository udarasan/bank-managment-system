package com.epic.bankingmanagment.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int transactionID;
    private double amount;
    private String description;
    private String date;

    @ManyToOne
    @JoinColumn(name = "accountNo",referencedColumnName = "accountNo")
    private Account accountNo;

    @ManyToOne
    @JoinColumn(name = "userID",referencedColumnName = "userID")
    private User userID;

    @ManyToOne
    @JoinColumn(name = "transactionTypeID",referencedColumnName = "transactionTypeID")
    private TransactionType transactionTypeID;

}
