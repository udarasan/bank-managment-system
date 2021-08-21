package com.epic.bankingmanagment.service.impl;

import com.epic.bankingmanagment.dto.AccountDTO;
import com.epic.bankingmanagment.dto.AuditDTO;
import com.epic.bankingmanagment.entity.Account;
import com.epic.bankingmanagment.entity.Audit;
import com.epic.bankingmanagment.repo.AuditRepo;
import com.epic.bankingmanagment.service.AuditService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AuditServiceImpl implements AuditService {

    @Autowired
    private AuditRepo auditRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void addRecord(AuditDTO dto) {
        auditRepo.save(mapper.map(dto, Audit.class));
    }

    @Override
    public ArrayList<AuditDTO> getAllAuditRecords() {
        List<Audit> all=auditRepo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<AuditDTO>>(){}.getType());
    }
}
