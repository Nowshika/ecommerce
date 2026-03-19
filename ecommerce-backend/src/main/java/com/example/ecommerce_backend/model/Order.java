package com.example.ecommerce_backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String status;
    private double total;
    private LocalDateTime createdAt;

    private String name;
    private String email;
    private String address;
    private String city;
    private String zip;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    private List<OrderItem> items;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        this.status = "Processing";
    }
}