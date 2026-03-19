import { useEffect, useState } from 'react';
import { getOrderHistory } from '../api/api';

function OrderHistory() {
  const [orders, setOrders] = useState(mockOrders);

  useEffect(() => {
    getOrderHistory(1)
      .then(res => setOrders(res.data))
      .catch(() => setOrders(mockOrders));
  }, []);

  if (orders.length === 0) {
    return (
      <div className="empty-page">
        <h2>No orders yet</h2>
        <p>Your order history will appear here.</p>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1 className="page-title">Order History</h1>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div>
                <div className="order-id">Order #{order.id}</div>
                <div className="order-date">{order.date}</div>
              </div>
              <div className="order-status">{order.status}</div>
            </div>
            <div className="order-items">
              {order.items.map((item, i) => (
                <div key={i} className="order-item">
                  <img src={item.imageUrl} alt={item.name} />
                  <div>
                    <div className="order-item-name">{item.name}</div>
                    <div className="order-item-qty">Qty: {item.quantity}</div>
                  </div>
                  <div className="order-item-price">${item.price}</div>
                </div>
              ))}
            </div>
            <div className="order-total">
              Total: <strong>${order.total.toFixed(2)}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockOrders = [
  {
    id: 1001, date: 'March 15, 2025', status: 'Delivered', total: 404,
    items: [
      { name: 'Koda Armchair', quantity: 1, price: 340, imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=100&q=80' },
      { name: 'Linen Cushion Set', quantity: 1, price: 64, imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=100&q=80' },
    ]
  },
  {
    id: 1002, date: 'March 18, 2025', status: 'In Transit', total: 175,
    items: [
      { name: 'Arc Floor Lamp', quantity: 1, price: 175, imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=100&q=80' },
    ]
  },
];

export default OrderHistory;