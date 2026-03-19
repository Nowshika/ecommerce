package com.example.ecommerce_backend.service;

import com.example.ecommerce_backend.dto.OrderRequest;
import com.example.ecommerce_backend.model.Order;
import com.example.ecommerce_backend.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public List<Order> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public Order placeOrder(OrderRequest request) {
        Order order = new Order();
        order.setUserId(request.getUserId());
        order.setName(request.getName());
        order.setEmail(request.getEmail());
        order.setAddress(request.getAddress());
        order.setCity(request.getCity());
        order.setZip(request.getZip());
        order.setTotal(request.getTotal());
        order.setItems(request.getItems());
        return orderRepository.save(order);
    }
}