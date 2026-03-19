import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../api/api';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(res => setProducts(res.data.slice(0, 4)))
      .catch(() => setProducts(mockProducts));
  }, []);

  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80"
            alt="hero"
          />
          <div className="hero-overlay">
            <span className="hero-tag">New collection 2025</span>
            <h1 className="hero-title">
              Live in <em>comfort</em>,<br />live in style
            </h1>
            <p className="hero-sub">
              Thoughtfully crafted home pieces for the way you actually live.
            </p>
            <div className="hero-btns">
              <Link to="/products" className="btn-primary">Shop now</Link>
              <Link to="/products" className="btn-outline">View catalog</Link>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <p className="featured-label">Featured pieces</p>
          {mockFeatured.map(item => (
            <div key={item.id} className="mini-card">
              <img src={item.imageUrl} alt={item.name} />
              <div className="mini-info">
                <span className="mini-new">New</span>
                <div className="mini-name">{item.name}</div>
                <div className="mini-price">${item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-inner">
          NEW ARRIVALS &nbsp;//&nbsp; SOFT LIVING COLLECTION &nbsp;//&nbsp;
          FREE DELIVERY OVER $150 &nbsp;//&nbsp; NEW ARRIVALS &nbsp;//&nbsp;
          SOFT LIVING COLLECTION &nbsp;//&nbsp; FREE DELIVERY OVER $150
          &nbsp;//&nbsp;
        </div>
      </div>

      {/* Categories */}
      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Shop by category</h2>
            <p className="section-sub">Explore our most loved collections</p>
          </div>
          <Link to="/products" className="see-all">See all</Link>
        </div>
        <div className="categories">
          {mockCategories.map(cat => (
            <Link to={`/products?category=${cat.name}`} key={cat.id} className="cat-card">
              <img src={cat.imageUrl} alt={cat.name} />
              <div className="cat-overlay">
                <div className="cat-name">{cat.name}</div>
                <span className="shop-btn">Shop now</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Featured products</h2>
            <p className="section-sub">Handpicked for your home</p>
          </div>
          <Link to="/products" className="see-all">See all</Link>
        </div>
        <div className="products-grid">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="collection-banner">
        <div className="banner-text">
          <h2 className="banner-title">Soft living.<br />Secret collection<br />by Lumiere</h2>
          <p className="banner-sub">
            A limited edit of 8 pieces designed for rest, calm and quiet luxury.
          </p>
          <Link to="/products" className="btn-dark">Explore collection</Link>
        </div>
        <div className="banner-imgs">
          {mockBannerImgs.map((img, i) => (
            <div key={i} className="banner-img">
              <img src={img} alt="collection" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

const mockProducts = [
  { id: 1, name: 'Koda Armchair', category: 'Seating', price: 340, imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80', badge: 'Bestseller' },
  { id: 2, name: 'Cloud 2-Seater', category: 'Sofas', price: 890, imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80' },
  { id: 3, name: 'Arc Floor Lamp', category: 'Lighting', price: 175, imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80', badge: 'New' },
  { id: 4, name: 'Linen Cushion Set', category: 'Textiles', price: 64, imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80' },
];

const mockFeatured = [
  { id: 1, name: 'Koda Armchair', price: 340, imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&q=80' },
  { id: 2, name: 'Dana Floor Lamp', price: 128, imageUrl: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&q=80' },
  { id: 3, name: 'Verta Throw Set', price: 64, imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200&q=80' },
];

const mockCategories = [
  { id: 1, name: 'Sofas & Seating', imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
  { id: 2, name: 'Lighting', imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
  { id: 3, name: 'Decor & Accents', imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
];

const mockBannerImgs = [
  'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80',
  'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&q=80',
];

export default Home;