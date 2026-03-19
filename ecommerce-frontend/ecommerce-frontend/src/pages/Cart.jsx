import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="empty-page">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <button className="btn-primary" onClick={() => navigate('/products')}>
          Start shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="page-title">Your Cart</h1>
        <button className="clear-btn" onClick={clearCart}>Clear all</button>
      </div>
      <div className="cart-grid">
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="cart-summary">
          <h3 className="summary-title">Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{totalPrice > 150 ? 'Free' : '$12.00'}</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-row total">
            <span>Total</span>
            <span>${(totalPrice > 150 ? totalPrice : totalPrice + 12).toFixed(2)}</span>
          </div>
          <button
            className="btn-checkout"
            onClick={() => navigate('/checkout')}
          >
            Proceed to checkout
          </button>
          <button
            className="btn-continue"
            onClick={() => navigate('/products')}
          >
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;