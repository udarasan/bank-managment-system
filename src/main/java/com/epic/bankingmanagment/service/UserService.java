package com.epic.bankingmanagment.service;

import com.epic.bankingmanagment.dto.UserDTO;

import java.util.ArrayList;

public interface UserService {
    void registerUser(UserDTO dto);

    ArrayList<UserDTO> getAllUsers();
}
