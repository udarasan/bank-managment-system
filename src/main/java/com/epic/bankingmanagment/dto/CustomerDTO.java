package com.epic.bankingmanagment.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor

@Data
public class CustomerDTO {

    private int customerID;
    private String customerName;
    private String email;
    private String dob;
    private String contact;
    private String address;

}
