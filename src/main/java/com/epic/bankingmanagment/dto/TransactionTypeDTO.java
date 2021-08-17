package com.epic.bankingmanagment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor

@Data
public class TransactionTypeDTO {

    private int transactionTypeID;
    private String transactionTypeDesc;


}
