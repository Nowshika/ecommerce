package com.example.ecommerce_backend.controller;

import com.example.ecommerce_backend.dto.OrderRequest;
import com.example.ecommerce_backend.model.Order;
import com.example.ecommerce_backend.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @GetMapping("/user/{userId}")
    public List<Order> getOrdersByUser(@PathVariable Long userId) {
        return orderService.getOrdersByUserId(userId);
    }

    @PostMapping
    public Order placeOrder(@RequestBody OrderRequest request) {
        return orderService.placeOrder(request);
    }
}