package com.epic.bankingmanagment.repo;


import com.epic.bankingmanagment.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface UserRepo  extends JpaRepository<User,Integer> {
    @Query(value = "SELECT * FROM User WHERE email=?1", nativeQuery = true)
    User getUser(String email);
}
