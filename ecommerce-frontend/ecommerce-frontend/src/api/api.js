import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8080/api'
});

// Products
export const getAllProducts     = ()         => API.get('/products');
export const getProductById     = (id)       => API.get(`/products/${id}`);
export const getProductsByCategory = (category) => API.get(`/products/category/${category}`);

// Cart
export const getCart            = (userId)   => API.get(`/cart/${userId}`);
export const addToCart          = (cartItem) => API.post('/cart');
export const removeFromCart     = (id)       => API.delete(`/cart/${id}`);

// Orders
export const placeOrder         = (order)    => API.post('/orders');
export const getOrderHistory    = (userId)   => API.get(`/orders/user/${userId}`);