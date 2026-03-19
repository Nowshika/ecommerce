import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { placeOrder } from '../api/api';

function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', address: '', city: '', zip: '', card: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await placeOrder({ items: cartItems, total: totalPrice, ...form });
    } catch {
      console.log('Mock order placed');
    }
    clearCart();
    setPlaced(true);
    setTimeout(() => navigate('/orders'), 2500);
  };

  if (placed) {
    return (
      <div className="empty-page">
        <div className="success-icon">✓</div>
        <h2>Order placed!</h2>
        <p>Thank you for your purchase. Redirecting to orders...</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="page-title">Checkout</h1>
      <div className="checkout-grid">
        <div className="checkout-form">
          <h3 className="form-section-title">Delivery details</h3>
          <div className="form-row">
            <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} />
            <input name="email" placeholder="Email address" value={form.email} onChange={handleChange} />
          </div>
          <input name="address" placeholder="Street address" value={form.address} onChange={handleChange} />
          <div className="form-row">
            <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
            <input name="zip" placeholder="ZIP code" value={form.zip} onChange={handleChange} />
          </div>
          <h3 className="form-section-title">Payment</h3>
          <input name="card" placeholder="Card number (mock)" value={form.card} onChange={handleChange} />
          <div className="form-row">
            <input placeholder="MM/YY" />
            <input placeholder="CVV" />
          </div>
          <button className="btn-checkout" onClick={handleSubmit}>
            Place order
          </button>
        </div>
        <div className="cart-summary">
          <h3 className="summary-title">Order Summary</h3>
          {cartItems.map(item => (
            <div key={item.id} className="summary-item">
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="summary-divider" />
          <div className="summary-row total">
            <span>Total</span>
            <span>${(totalPrice > 150 ? totalPrice : totalPrice + 12).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;