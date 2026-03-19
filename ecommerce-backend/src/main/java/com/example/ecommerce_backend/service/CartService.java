package com.example.ecommerce_backend.service;

import com.example.ecommerce_backend.model.CartItem;
import com.example.ecommerce_backend.repository.CartItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CartItemRepository cartItemRepository;

    public List<CartItem> getCartByUserId(Long userId) {
        return cartItemRepository.findByUserId(userId);
    }

    public CartItem addToCart(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    public void removeFromCart(Long id) {
        cartItemRepository.deleteById(id);
    }

    public void clearCart(Long userId) {
        cartItemRepository.deleteByUserId(userId);
    }
}