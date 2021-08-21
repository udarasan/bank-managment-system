package com.epic.bankingmanagment.service;


import com.epic.bankingmanagment.dto.AccountDTO;

import java.util.ArrayList;

public interface AccountService {

    void createAccount(AccountDTO dto);

    ArrayList<AccountDTO> getAllAccounts();

    boolean accountNoAlreadyExists(int nic);

    void deleteAccount(int id);

    AccountDTO searchAccount(int id);

    void updateAccount(AccountDTO dto);

    int getAvailableAccountCount();
}
