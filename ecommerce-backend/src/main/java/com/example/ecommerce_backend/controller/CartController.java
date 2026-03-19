package com.example.ecommerce_backend.controller;

import com.example.ecommerce_backend.model.CartItem;
import com.example.ecommerce_backend.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping("/{userId}")
    public List<CartItem> getCart(@PathVariable Long userId) {
        return cartService.getCartByUserId(userId);
    }

    @PostMapping
    public CartItem addToCart(@RequestBody CartItem cartItem) {
        return cartService.addToCart(cartItem);
    }

    @DeleteMapping("/{id}")
    public void removeFromCart(@PathVariable Long id) {
        cartService.removeFromCart(id);
    }

    @DeleteMapping("/clear/{userId}")
    public void clearCart(@PathVariable Long userId) {
        cartService.clearCart(userId);
    }
}