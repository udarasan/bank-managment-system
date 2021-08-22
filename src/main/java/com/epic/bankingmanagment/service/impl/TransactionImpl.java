package com.epic.bankingmanagment.service.impl;

import com.epic.bankingmanagment.dto.TransactionDTO;
import com.epic.bankingmanagment.dto.UserDTO;
import com.epic.bankingmanagment.entity.Account;
import com.epic.bankingmanagment.entity.Transaction;
import com.epic.bankingmanagment.entity.TransactionType;
import com.epic.bankingmanagment.entity.User;
import com.epic.bankingmanagment.exception.ValidateException;
import com.epic.bankingmanagment.repo.AccountRepo;
import com.epic.bankingmanagment.repo.TransactionRepo;
import com.epic.bankingmanagment.service.TransactionService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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


        Account account = dto.getAccountNo();
        double availableAccountAmount = accountRepo.getAvailableAccBlanc(account.getAccountNo());
        double transActionAmount = dto.getAmount();

        //accountRepo.getAccountTypeID(account.getAccountNo());

        //check account type(Saving OR Current)
        if (accountRepo.getAccountTypeID(account.getAccountNo()) == 1) {
            System.out.println("Saving");
            TransactionType transactionType = dto.getTransactionTypeID();
            int transactionTypeID = transactionType.getTransactionTypeID();
            //check Transaction Type type(Withdrawal , Deposit or Money Transfer)
            //this section for Saving account money withdrawal
            if (transactionTypeID == 1) {
                if (transActionAmount < availableAccountAmount - 500.00) {
                    System.out.println(availableAccountAmount - 500.00);
                    System.out.println(transActionAmount);
                    double updateAmount = availableAccountAmount - transActionAmount;
                    accountRepo.updateAccountAmount(updateAmount, account.getAccountNo());

                    transactionRepo.save(mapper.map(dto, Transaction.class));
                } else {
                    throw new ValidateException("You Have Not Enough Money In Your Account");
                }

            //this section for Saving account money Deposit
            } else if (transactionTypeID == 2) {
                System.out.println("else-if");

                double updateAmount = availableAccountAmount + transActionAmount;
                accountRepo.updateAccountAmount(updateAmount, account.getAccountNo());

                transactionRepo.save(mapper.map(dto, Transaction.class));
            //this section for Saving account money Transfer
            } else {
                System.out.println("else");
                if (transActionAmount < availableAccountAmount) {
                /*double updateAmount=availableAccountAmount-transActionAmount;
                dto.setAmount(updateAmount);
                transactionRepo.save(mapper.map(dto, Transaction.class));*/

                }
            }


        } else {
            System.out.println("Crrunt");

            TransactionType transactionType = dto.getTransactionTypeID();
            int transactionTypeID = transactionType.getTransactionTypeID();
            //check Transaction Type type(Withdrawal , Deposit or Money Transfer)
            //this section for current account money withdrawal
            if (transactionTypeID == 1) {
                if (transActionAmount < availableAccountAmount - 2000.00) {
                    System.out.println(availableAccountAmount - 2000.00);
                    System.out.println(transActionAmount);
                    double updateAmount = availableAccountAmount - transActionAmount;
                    accountRepo.updateAccountAmount(updateAmount, account.getAccountNo());

                    transactionRepo.save(mapper.map(dto, Transaction.class));
                } else {
                    throw new ValidateException("You Have Not Enough Money In Your Account");
                }

            //this section for Current account money Deposit
            } else if (transactionTypeID == 2) {
                System.out.println("else-if");

                double updateAmount = availableAccountAmount + transActionAmount;
                accountRepo.updateAccountAmount(updateAmount, account.getAccountNo());

                transactionRepo.save(mapper.map(dto, Transaction.class));
            //this section for Current account money Transfer
            } else {
                System.out.println("else");
                if (transActionAmount < availableAccountAmount) {
                /*double updateAmount=availableAccountAmount-transActionAmount;
                dto.setAmount(updateAmount);
                transactionRepo.save(mapper.map(dto, Transaction.class));*/

                }
            }


        }


    }

    @Override
    public ArrayList<TransactionDTO> getAllTransactions() {
        List<Transaction> all = transactionRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<TransactionDTO>>() {
        }.getType());
    }

    @Override
    public TransactionDTO searchTransaction(int id) {
        Optional<Transaction> transaction = transactionRepo.findById(id);
        if (transaction.isPresent()) {
            return mapper.map(transaction.get(), TransactionDTO.class);
        }
        return null;
    }
}
