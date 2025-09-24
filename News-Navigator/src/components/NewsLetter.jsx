import React, { useState } from "react";
import "../styles/NewsLetter.css";

const NewsLetter = () => {
  const [showA, setShowA] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail("");
    setShowA(true);
    setTimeout(() => setShowA(false), 3000);
  };

  return (
    <div className="newsletter-container">
      <h2>Subscribe to the newsletter</h2>
      <h4>Get a weekly digest of our most important stories direct to your inbox.</h4>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <button type="submit">Subscribe</button>
      </form>

      {showA && (
        <div className="newsletter-success">
          <p>✅ Thank you for subscribing!</p>
          <p>You will receive a confirmation email shortly.</p>
        </div>
      )}

      <p>
        Place some disclaimer text here about subscriber’s email, Privacy Policy
        and all that.
      </p>
    </div>
  );
};

export default NewsLetter;
