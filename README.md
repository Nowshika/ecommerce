# Lumiere Home — Full Stack E-Commerce Application

A full-stack e-commerce application for a home and lifestyle store, built with Spring Boot and React. Features a Pinterest-inspired Glassmorphism UI with pastel aesthetics.

![Java](https://img.shields.io/badge/Java-21-orange?style=flat-square&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-brightgreen?style=flat-square&logo=springboot)
![React](https://img.shields.io/badge/React-Vite-blue?style=flat-square&logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=flat-square&logo=postgresql)

---

## Features

- Browse and filter products by category
- View detailed product pages
- Add products to cart with quantity control
- Persistent cart management
- Mock checkout with order placement
- Full order history
- Real-time cart counter in navbar
- Responsive pastel Glassmorphism UI

---

## Tech Stack

| Layer | Technology |
|---|---|
| Language | Java 21 |
| Backend Framework | Spring Boot 3.2.0 |
| Database | PostgreSQL |
| ORM | Spring Data JPA / Hibernate |
| Frontend | React (Vite) |
| HTTP Client | Axios |
| Routing | React Router DOM |
| State Management | React Context API |
| Styling | Custom CSS |
| Build Tool | Maven |

---

## Project Structure

```
ecommerce/
├── ecommerce-backend/
│   └── src/main/java/com/example/ecommerce_backend/
│       ├── controller/
│       │   ├── ProductController.java
│       │   ├── CartController.java
│       │   └── OrderController.java
│       ├── model/
│       │   ├── Product.java
│       │   ├── CartItem.java
│       │   ├── Order.java
│       │   └── OrderItem.java
│       ├── repository/
│       │   ├── ProductRepository.java
│       │   ├── CartItemRepository.java
│       │   └── OrderRepository.java
│       ├── service/
│       │   ├── ProductService.java
│       │   ├── CartService.java
│       │   └── OrderService.java
│       ├── dto/
│       │   └── OrderRequest.java
│       ├── CorsConfig.java
│       └── EcommerceBackendApplication.java
│
└── ecommerce-frontend/
    └── src/
        ├── api/
        │   └── api.js
        ├── components/
        │   ├── Navbar.jsx
        │   ├── Footer.jsx
        │   ├── ProductCard.jsx
        │   └── CartItem.jsx
        ├── pages/
        │   ├── Home.jsx
        │   ├── Products.jsx
        │   ├── ProductDetail.jsx
        │   ├── Cart.jsx
        │   ├── Checkout.jsx
        │   └── OrderHistory.jsx
        ├── context/
        │   └── CartContext.jsx
        ├── App.jsx
        └── App.css
```

---

## Spring Boot Dependencies (pom.xml)

```xml
<!-- Spring Web -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- Spring Data JPA -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!-- PostgreSQL Driver -->
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>

<!-- Lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
```

---

## React Dependencies

```bash
npm install axios react-router-dom
```

---

## Prerequisites

- Java 21
- Node.js
- PostgreSQL
- IntelliJ IDEA
- Postman (optional, for API testing)

---

## Step by Step Summary

### Backend Setup
1. Create Spring Boot project via IntelliJ Spring Initializr
2. Add dependencies: Spring Web, Spring Data JPA, PostgreSQL Driver, Lombok
3. Create PostgreSQL database: `CREATE DATABASE ecommercedb;`
4. Configure `application.properties` with DB credentials
5. Create packages: `controller`, `model`, `repository`, `service`, `dto`
6. Create model classes with `@Entity`, `@Getter`, `@Setter`, `@NoArgsConstructor`
7. Create repository interfaces extending `JpaRepository`
8. Create service classes with `@Service`, `@RequiredArgsConstructor`
9. Create controller classes with `@RestController`, `@RequestMapping`, `@CrossOrigin`
10. Add `CorsConfig.java` to allow frontend requests
11. Run Spring Boot and test APIs via Postman
12. Bulk insert products via `/api/products/bulk`

### Frontend Setup
1. Create React project: `npm create vite@latest ecommerce-frontend -- --template react`
2. Install dependencies: `npm install axios react-router-dom`
3. Create folder structure: `api`, `components`, `pages`, `context`
4. Set up `CartContext.jsx` for global cart state
5. Set up `api.js` with all Axios API calls
6. Set up `App.jsx` with React Router routes
7. Build components: `Navbar`, `Footer`, `ProductCard`, `CartItem`
8. Build pages: `Home`, `Products`, `ProductDetail`, `Cart`, `Checkout`, `OrderHistory`
9. Style everything in `App.css`
10. Run: `npm run dev`

### Important Notes
- Package names cannot have hyphens in Java — use underscore: `ecommerce_backend`
- Always use `@Getter @Setter @NoArgsConstructor` instead of `@Data @AllArgsConstructor` to avoid Lombok conflicts
- Enable Annotation Processing in IntelliJ: Preferences → Build → Compiler → Annotation Processors
- CORS must be configured in both `@CrossOrigin` on controllers AND `CorsConfig.java`
- PostgreSQL data is persistent — products inserted once stay forever even after restart

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce.git
cd ecommerce
```

### 2. Set Up the Database

```sql
CREATE DATABASE ecommercedb;
```

### 3. Configure Backend

Update `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/ecommercedb
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

server.port=8080
```

### 4. Run the Backend

Open `ecommerce-backend` in IntelliJ IDEA and run `EcommerceBackendApplication.java`.

```
Backend running at: http://localhost:8080
```

### 5. Run the Frontend

```bash
cd ecommerce-frontend
npm install
npm run dev
```

```
Frontend running at: http://localhost:5173
```

---

## Ready to Use API Reference

### Products

| Method | Endpoint | Description | Body |
|---|---|---|---|
| GET | `/api/products` | Get all products | None |
| GET | `/api/products/{id}` | Get single product | None |
| GET | `/api/products/category/{category}` | Filter by category | None |
| POST | `/api/products` | Create one product | Product JSON |
| POST | `/api/products/bulk` | Bulk insert products | Array of Products |
| DELETE | `/api/products/{id}` | Delete a product | None |

**Single Product Body:**
```json
{
    "name": "Koda Armchair",
    "category": "Sofas & Seating",
    "description": "A beautifully crafted armchair.",
    "price": 340.00,
    "imageUrl": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80",
    "badge": "Bestseller"
}
```

**Bulk Insert Body:**
```json
[
    {
        "name": "Koda Armchair",
        "category": "Sofas & Seating",
        "description": "A beautifully crafted armchair designed for ultimate comfort and style.",
        "price": 340.00,
        "imageUrl": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80",
        "badge": "Bestseller"
    },
    {
        "name": "Cloud 2-Seater Sofa",
        "category": "Sofas & Seating",
        "description": "Sink into pure comfort with this cloud-like 2-seater sofa.",
        "price": 890.00,
        "imageUrl": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80",
        "badge": null
    },
    {
        "name": "Arc Floor Lamp",
        "category": "Lighting",
        "description": "A sleek arc floor lamp that adds warmth to any corner.",
        "price": 175.00,
        "imageUrl": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
        "badge": "New"
    },
    {
        "name": "Linen Cushion Set",
        "category": "Textiles",
        "description": "Set of 2 premium linen cushions in soft neutral tones.",
        "price": 64.00,
        "imageUrl": "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80",
        "badge": null
    },
    {
        "name": "Marble Side Table",
        "category": "Decor & Accents",
        "description": "Elegant marble side table with gold accents.",
        "price": 220.00,
        "imageUrl": "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&q=80",
        "badge": "New"
    },
    {
        "name": "Woven Wall Hanging",
        "category": "Decor & Accents",
        "description": "Handcrafted boho woven wall hanging for a cozy touch.",
        "price": 85.00,
        "imageUrl": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
        "badge": null
    },
    {
        "name": "Velvet Throw Blanket",
        "category": "Textiles",
        "description": "Ultra soft velvet throw blanket in dusty rose.",
        "price": 48.00,
        "imageUrl": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80",
        "badge": null
    },
    {
        "name": "Pendant Light",
        "category": "Lighting",
        "description": "Minimalist pendant light perfect above dining tables.",
        "price": 195.00,
        "imageUrl": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&q=80",
        "badge": null
    }
]
```

---

### Cart

| Method | Endpoint | Description | Body |
|---|---|---|---|
| GET | `/api/cart/{userId}` | Get cart by user | None |
| POST | `/api/cart` | Add item to cart | CartItem JSON |
| DELETE | `/api/cart/{id}` | Remove single item | None |
| DELETE | `/api/cart/clear/{userId}` | Clear entire cart | None |

**Cart Item Body:**
```json
{
    "userId": 1,
    "productId": 1,
    "name": "Koda Armchair",
    "imageUrl": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80",
    "price": 340.00,
    "quantity": 1
}
```

---

### Orders

| Method | Endpoint | Description | Body |
|---|---|---|---|
| GET | `/api/orders/user/{userId}` | Get order history | None |
| POST | `/api/orders` | Place an order | OrderRequest JSON |

**Order Request Body:**
```json
{
    "userId": 1,
    "name": "Nowshika Mirza",
    "email": "nowshika@example.com",
    "address": "123 Main Street",
    "city": "Chennai",
    "zip": "600001",
    "total": 340.00,
    "items": [
        {
            "name": "Koda Armchair",
            "imageUrl": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80",
            "price": 340.00,
            "quantity": 1
        }
    ]
}
```

---

## Roadmap

- [ ] User authentication with Spring Security and JWT
- [ ] Admin dashboard for product management
- [ ] Search and sort functionality
- [ ] Wishlist feature
- [ ] Payment gateway integration
- [ ] Deployment — Railway (backend) and Vercel (frontend)

---

## Author

**Nowshika Mirza**

---

## License

This project is open source and available under the [MIT License](LICENSE).
