import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../api/api';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    getProductById(id)
      .then(res => setProduct(res.data))
      .catch(() => setProduct(mockProducts.find(p => p.id === Number(id))));
  }, [id]);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-grid">
        <div className="detail-img-wrap">
          <img src={product.imageUrl} alt={product.name} className="detail-img" />
          {product.badge && <span className="product-badge">{product.badge}</span>}
        </div>
        <div className="detail-info">
          <div className="detail-cat">{product.category}</div>
          <h1 className="detail-name">{product.name}</h1>
          <div className="detail-price">${product.price}</div>
          <p className="detail-desc">
            {product.description || 'A beautifully crafted piece designed to bring warmth and personality to your home. Made with premium materials for lasting comfort and style.'}
          </p>
          <div className="detail-qty">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <button className="btn-add-detail" onClick={handleAdd}>
            {added ? 'Added to cart!' : '+ Add to cart'}
          </button>
          <button className="btn-cart-detail" onClick={() => navigate('/cart')}>
            View cart
          </button>
        </div>
      </div>
    </div>
  );
}

const mockProducts = [
  { id: 1, name: 'Koda Armchair', category: 'Sofas & Seating', price: 340, imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80', badge: 'Bestseller' },
  { id: 2, name: 'Cloud 2-Seater', category: 'Sofas & Seating', price: 890, imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80' },
  { id: 3, name: 'Arc Floor Lamp', category: 'Lighting', price: 175, imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80', badge: 'New' },
  { id: 4, name: 'Linen Cushion Set', category: 'Textiles', price: 64, imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80' },
];

export default ProductDetail;