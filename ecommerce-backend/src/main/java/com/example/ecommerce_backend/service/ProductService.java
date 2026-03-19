package com.example.ecommerce_backend.service;

import com.example.ecommerce_backend.model.Product;
import com.example.ecommerce_backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    public List<Product> getProductsByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> createAllProducts(List<Product> products) {
        return productRepository.saveAll(products);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}