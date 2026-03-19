import { useCart } from '../context/CartContext';

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} className="cart-item-img" />
      <div className="cart-item-info">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-cat">{item.category}</div>
        <div className="cart-item-price">${item.price}</div>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-wrap">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
        <div className="cart-item-total">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button
          className="remove-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;