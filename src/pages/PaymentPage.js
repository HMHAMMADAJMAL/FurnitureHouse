import React, { useState } from "react";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    if (paymentMethod === "jazzcash") {
      // Redirect to JazzCash payment flow
      window.location.href = "https://sandbox.jazzcash.com.pk/...";
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "100px auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Payment Options</h2>
      
      <div style={{ margin: "20px 0" }}>
        <label>
          <input
            type="radio"
            name="payment"
            value="jazzcash"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          JazzCash
        </label>
      </div>

      <div style={{ margin: "20px 0" }}>
        <label>
          <input
            type="radio"
            name="payment"
            value="easypaisa"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          EasyPaisa
        </label>
      </div>

      <button
        onClick={handlePayment}
        disabled={!paymentMethod}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%"
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default PaymentPage;