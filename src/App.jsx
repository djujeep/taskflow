import { useState } from 'react';
import './App.css';

function App() {
const  [quantity, setQuantity] = useState(0);
const [deliveryOption, setDeliveryOption] = useState("");
const [customerName, setCustomerName] = useState("");
const [customerAddress, setCustomerAddress] = useState("");
const [orderPlaced, setOrderPlaced] = useState(false);

function handleChange(e) {
  setQuantity(Number(e.target.value));

}
function handleSubmit(e) {
  e.preventDefault();

  if (
    customerName === "" ||
    customerAddress === "" ||
    quantity === 0 ||
    deliveryOption === ""
  ) {
    alert("Please complete all fields");
  } else {
    setOrderPlaced(true);
  }
}
function handleDeliveryChange(e) {
  setDeliveryOption(e.target.value);
}
const price = 35000;
const subtotal = price * quantity;

const deliveryFee = 
      deliveryOption === "standard" ? 2000 :
      deliveryOption === "express" ? 5000 : 0;

      const total = subtotal + deliveryFee;

      function handleNameChange(e) {
        setCustomerName(e.target.value);
      }

      function handleAddressChange(e) {
        setCustomerAddress(e.target.value);
      }

      
  
return (
  <div className="page">
    <div className="order-container">
      <header className="page-header">
        <p className="brand-name">SOLE & CO.</p>
        <h1>Complete Your Order</h1>
        <p className="subtitle">A little comfort, one step at a time.</p>
      </header>

<div className="checkout-progress">
  <div className="progress-step active">
    <span>1</span>
    <p>Details</p>
  </div>

  <div className="progress-line"></div>

  <div className={`progress-step ${orderPlaced ? "active" : ""}`}>
    <span>2</span>
    <p>Confirmation</p>
  </div>
</div>

      <section className="product-section">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
          alt="Classic red sneakers"
          className="product-image"
        />

        <div className="product-details">
          <h2>Classic Sneakers</h2>
          <p className="product-description">Everyday comfort. Timeless style.</p>
          <p className="product-price">₦35,000</p>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="order-form">
        <h3 className="section-heading">Your Details</h3>

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={customerName}
            onChange={handleNameChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Delivery Address</label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your delivery address"
            value={customerAddress}
            onChange={handleAddressChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            name="quantity"
            type="number"
            min="1"
            id="quantity"
            value={quantity}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <h3 className="section-heading">Delivery Method</h3>

          <div className={`delivery-option ${deliveryOption === "express" ? "selected" : ""}`}>
            <label htmlFor="standard">
              <input
                type="radio"
                id="standard"
                name="deliveryOption"
                value="standard"
                checked={deliveryOption === "standard"}
                onChange={handleDeliveryChange}
              />
              <span>Standard Delivery — ₦2,000</span>
            </label>
          </div>

          <div className={`delivery-option ${deliveryOption === "standard" ? "selected" : ""}`}>
            <label htmlFor="express">
              <input
                type="radio"
                id="express"
                name="deliveryOption"
                value="express"
                checked={deliveryOption === "express"}
                onChange={handleDeliveryChange}
              />
              <span>Express Delivery — ₦5,000</span>
            </label>
          </div>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString("en-NG")}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>₦{deliveryFee.toLocaleString("en-NG")}</span>
          </div>
          <div className="summary-row total-row">
            <strong>Total</strong>
            <strong>₦{total.toLocaleString("en-NG")}</strong>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Place Order
        </button>
      </form>

     {orderPlaced && (
  <div className="success-message">
    <span className="success-icon">✓</span>
    <h3>Order successfully placed!</h3>
    <p>Thank you for shopping with Sole & Co.</p>
    <p>We'll get your sneakers ready for delivery.</p>
  </div>
)}
  </div>
  </div>
);
}


export default App;

