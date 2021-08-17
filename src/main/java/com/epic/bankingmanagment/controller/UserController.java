package com.epic.bankingmanagment.controller;

import com.epic.bankingmanagment.dto.UserDTO;
import com.epic.bankingmanagment.exception.NotFoundException;
import com.epic.bankingmanagment.service.UserService;
import com.epic.bankingmanagment.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/registerUser", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveUser(@RequestBody UserDTO dto) {
        userService.registerUser(dto);
        return new ResponseEntity(new StandardResponse("200", "Done", dto), HttpStatus.CREATED);
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllUsers() {
        ArrayList<UserDTO> allUsers = userService.getAllUsers();
        return new ResponseEntity(new StandardResponse("200", "Done", allUsers), HttpStatus.OK);
    }

}
