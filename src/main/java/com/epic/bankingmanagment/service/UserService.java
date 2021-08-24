package com.epic.bankingmanagment.service;

import com.epic.bankingmanagment.dto.UserDTO;
import com.epic.bankingmanagment.dto.UserResponseDTO;

import java.util.ArrayList;

public interface UserService {
    void registerUser(UserDTO dto);

    ArrayList<UserDTO> getAllUsers();

    UserResponseDTO matchesEmail(String email, String password);

    boolean nicAlreadyExists(int nic);

    void deleteUser(int id);

    UserDTO searchUser(String id);

    void updateUser(UserDTO dto);

    int getAvailableEmployeeCount();
}
