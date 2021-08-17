package com.epic.bankingmanagment.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
public class Audit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int auditID;
    private String auditDate;
    private String auditTime;
    private String auditType;
    private String auditDesc;

    @ManyToOne
    @JoinColumn(name = "userID",referencedColumnName = "userID")
    private User userID;
}
