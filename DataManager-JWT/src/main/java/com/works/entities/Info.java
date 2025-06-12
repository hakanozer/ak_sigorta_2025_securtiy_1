package com.works.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
public class Info {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long iid;

    private String sessionId;
    private String agent;
    private String ip;
    private String url;
    private String userName;
    private String roles;
    private String time;

    public Info() {
    }

    public Info(String sessionId, String agent, String ip, String url, String userName, String roles, String time) {
        this.sessionId = sessionId;
        this.agent = agent;
        this.ip = ip;
        this.url = url;
        this.userName = userName;
        this.roles = roles;
        this.time = time;
    }
}
