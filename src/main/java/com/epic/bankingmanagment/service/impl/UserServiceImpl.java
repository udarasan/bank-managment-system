package com.epic.bankingmanagment.service.impl;

import com.epic.bankingmanagment.dto.UserDTO;
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

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo ;

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
}
