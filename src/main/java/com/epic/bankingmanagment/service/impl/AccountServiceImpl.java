package com.epic.bankingmanagment.service.impl;

import com.epic.bankingmanagment.dto.AccountDTO;
import com.epic.bankingmanagment.entity.Account;
import com.epic.bankingmanagment.exception.ValidateException;
import com.epic.bankingmanagment.repo.AccountRepo;
import com.epic.bankingmanagment.service.AccountService;
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
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountRepo accountRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void createAccount(AccountDTO dto) {
        if (accountNoAlreadyExists(dto.getAccountNo())){
            throw new ValidateException("This AccountNumber Ia Already Used!");
        }
        accountRepo.save(mapper.map(dto,Account.class));
    }

    @Override
    public ArrayList<AccountDTO> getAllAccounts() {
        List<Account> all=accountRepo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<AccountDTO>>(){}.getType());
    }

    @Override
    public boolean accountNoAlreadyExists(int id) {
        return accountRepo.existsById(id);
    }

    @Override
    public void deleteAccount(int id) {
        if (accountNoAlreadyExists(id)){
            throw new ValidateException("No Account For This Account Number!");
        }
        accountRepo.deleteById(id);
    }

    @Override
    public AccountDTO searchAccount(int id) {
        Optional<Account> account = accountRepo.findById(id);
        if (account.isPresent()) {
            return mapper.map(account.get(), AccountDTO.class);
        }
        return null;
    }

    @Override
    public void updateAccount(AccountDTO dto) {
        if (accountRepo.existsById(dto.getAccountNo())) {
            accountRepo.save(mapper.map(dto, Account.class));

        }
    }

    @Override
    public int getAvailableAccountCount() {
        return accountRepo.getAvailableAccountCount();
    }
}
