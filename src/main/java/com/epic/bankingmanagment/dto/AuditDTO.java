package com.epic.bankingmanagment.dto;

import com.epic.bankingmanagment.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor

@Data
public class AuditDTO {

    private int auditID;
    private String auditDate;
    private String auditTime;
    private String auditType;
    private String auditDesc;

    private User userID;
}
