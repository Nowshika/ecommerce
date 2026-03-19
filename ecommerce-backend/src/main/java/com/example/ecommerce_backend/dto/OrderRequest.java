package com.example.ecommerce_backend.dto;

import com.example.ecommerce_backend.model.OrderItem;
import lombok.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderRequest {

    private Long userId;
    private String name;
    private String email;
    private String address;
    private String city;
    private String zip;
    private double total;
    private List<OrderItem> items;
}