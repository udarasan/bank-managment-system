package com.epic.bankingmanagment.repo;


import com.epic.bankingmanagment.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo  extends JpaRepository<User,Integer> {
}
