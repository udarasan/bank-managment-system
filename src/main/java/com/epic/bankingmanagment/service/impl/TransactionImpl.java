package com.epic.bankingmanagment.service.impl;

import com.epic.bankingmanagment.dto.TransactionDTO;
import com.epic.bankingmanagment.entity.Account;
import com.epic.bankingmanagment.entity.Transaction;
import com.epic.bankingmanagment.repo.AccountRepo;
import com.epic.bankingmanagment.repo.TransactionRepo;
import com.epic.bankingmanagment.service.TransactionService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class TransactionImpl implements TransactionService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private TransactionRepo transactionRepo;

    @Autowired
    private AccountRepo accountRepo;

    @Override
    public void doTransaction(TransactionDTO dto) {

        Account account=dto.getAccountNo();
        //System.out.println(account.getAccountNo());
        double availableAccountAmount=accountRepo.getAvailableAccBlanc(account.getAccountNo());
        double transActionAmount=dto.getAmount();

        if (dto.getTransactionTypeID().equals(1)){
            if (transActionAmount<availableAccountAmount){
                double updateAmount=availableAccountAmount-transActionAmount;
                dto.setAmount(updateAmount);
                transactionRepo.save(mapper.map(dto, Transaction.class));
            }

        }else if(dto.getTransactionTypeID().equals(2)){
            double updateAmount=availableAccountAmount+transActionAmount;
            dto.setAmount(updateAmount);
            transactionRepo.save(mapper.map(dto, Transaction.class));
        }else {
            if (transActionAmount<availableAccountAmount){
                /*double updateAmount=availableAccountAmount-transActionAmount;
                dto.setAmount(updateAmount);
                transactionRepo.save(mapper.map(dto, Transaction.class));*/

            }
        }



    }
}
