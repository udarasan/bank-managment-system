package com.epic.bankingmanagment.service.impl;

import com.epic.bankingmanagment.dto.UserDTO;
import com.epic.bankingmanagment.dto.UserResponseDTO;
import com.epic.bankingmanagment.entity.User;
import com.epic.bankingmanagment.exception.ValidateException;
import com.epic.bankingmanagment.repo.UserRepo;
import com.epic.bankingmanagment.service.UserService;
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
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper mapper;

    @Override
    public void registerUser(UserDTO dto) {

        userRepo.save(mapper.map(dto, User.class));
    }

    @Override
    public ArrayList<UserDTO> getAllUsers() {
        List<User> all = userRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<UserDTO>>() {
        }.getType());
    }

    @Override
    public UserResponseDTO matchesEmail(String email, String password) {

        User all = userRepo.getUser(email);
        if (all.getPassword().equals(password)) {
            return mapper.map(all, UserResponseDTO.class);

        } else {
            return null;
        }

    }

    @Override
    public boolean nicAlreadyExists(int id) {
        return userRepo.existsById(id);
    }

    @Override
    public void deleteUser(int id) {
        if (!userRepo.existsById(id)) {
            throw new ValidateException("No Customer for Delete..!");
        }
        userRepo.deleteById(id);
    }

    @Override
    public UserDTO searchUser(int id) {
        Optional<User> customer = userRepo.findById(id);
        if (customer.isPresent()) {
            return mapper.map(customer.get(), UserDTO.class);
        }
        return null;
    }

    @Override
    public void updateUser(UserDTO dto) {
        if (userRepo.existsById(dto.getUserID())) {
            userRepo.save(mapper.map(dto, User.class));

        }
    }
}
