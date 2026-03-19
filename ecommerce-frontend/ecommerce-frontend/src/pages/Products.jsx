import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllProducts } from '../api/api';
import ProductCard from '../components/ProductCard';

const categories = ['All', 'Sofas & Seating', 'Lighting', 'Decor & Accents', 'Textiles'];

function Products() {
  const [products, setProducts] = useState(mockProducts);
  const [active, setActive] = useState('All');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActive(cat);
    getAllProducts()
      .then(res => setProducts(res.data))
      .catch(() => setProducts(mockProducts));
  }, []);

  const filtered = active === 'All'
    ? products
    : products.filter(p => p.category === active);

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="page-title">Our Catalog</h1>
        <p className="page-sub">Discover pieces made for real living</p>
      </div>
      <div className="filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

const mockProducts = [
  { id: 1, name: 'Koda Armchair', category: 'Sofas & Seating', price: 340, imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80', badge: 'Bestseller' },
  { id: 2, name: 'Cloud 2-Seater', category: 'Sofas & Seating', price: 890, imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80' },
  { id: 3, name: 'Arc Floor Lamp', category: 'Lighting', price: 175, imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80', badge: 'New' },
  { id: 4, name: 'Linen Cushion Set', category: 'Textiles', price: 64, imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80' },
  { id: 5, name: 'Marble Side Table', category: 'Decor & Accents', price: 220, imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&q=80' },
  { id: 6, name: 'Woven Wall Hanging', category: 'Decor & Accents', price: 85, imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80' },
  { id: 7, name: 'Velvet Throw Blanket', category: 'Textiles', price: 48, imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80' },
  { id: 8, name: 'Pendant Light', category: 'Lighting', price: 195, imageUrl: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&q=80' },
];

export default Products;