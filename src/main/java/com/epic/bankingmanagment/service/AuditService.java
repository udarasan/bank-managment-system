package com.epic.bankingmanagment.service;

import com.epic.bankingmanagment.dto.AccountDTO;
import com.epic.bankingmanagment.dto.AuditDTO;

import java.util.ArrayList;

public interface AuditService {
    void addRecord(AuditDTO dto);
    ArrayList<AuditDTO> getAllAuditRecords();
}
