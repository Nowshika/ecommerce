import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-img-wrap">
        <img src={product.imageUrl} alt={product.name} className="product-img" />
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
      </Link>
      <div className="product-info">
        <div className="product-cat">{product.category}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-bottom">
          <div className="product-price">${product.price}</div>
          <button
            className="add-btn"
            onClick={() => addToCart(product)}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;