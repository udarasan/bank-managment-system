package com.epic.bankingmanagment.controller;

import com.epic.bankingmanagment.dto.AccountDTO;
import com.epic.bankingmanagment.dto.AuditDTO;
import com.epic.bankingmanagment.service.AuditService;
import com.epic.bankingmanagment.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin
@RestController
@RequestMapping("api/v1/audit")
public class AuditController {
    @Autowired
    private AuditService auditService;

    @PostMapping(path = "/recordAudit", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveCustomer(@RequestBody AuditDTO dto) {
        auditService.addRecord(dto);
        return new ResponseEntity(new StandardResponse("201", "Done", dto), HttpStatus.CREATED);
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllAccount() {
        ArrayList<AuditDTO> allAudits = auditService.getAllAuditRecords();
        return new ResponseEntity(new StandardResponse("200", "Done", allAudits), HttpStatus.OK);
    }


}

