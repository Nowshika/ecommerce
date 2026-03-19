import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Lumiere Home</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Catalog</Link>
        <Link to="/orders">Orders</Link>
      </div>
      <Link to="/cart" className="cart-pill">
        Cart <span className="cart-count">{totalItems}</span>
      </Link>
    </nav>
  );
}

export default Navbar;