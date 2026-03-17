"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { cartTotal, clearCart, readCart, removeFromCart, updateQuantity } from "../../lib/cart";

export default function CartPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const sync = () => setItems(readCart());
    sync();
    window.addEventListener("cart:updated", sync);
    return () => window.removeEventListener("cart:updated", sync);
  }, []);

  const total = useMemo(() => cartTotal(items), [items]);

  const handleCheckout = () => {
    window.open("https://www.instagram.com/thecrochet_.corner/", "_blank");
  };

  return (
    <div className="page-wrap">
      <Navbar />
      <main>
        <section className="social-section" id="cart">
          <div className="social-heading">
            <h2>Your Cart</h2>
            <p>Review your selected items before placing your order.</p>
          </div>

          <div className="social-quotes" style={{ marginTop: "18px" }}>
            {items.length === 0 ? (
              <article className="testimonial-card">
                <p>Your cart is empty. Add items from the shop to continue.</p>
                <div className="cta-actions" style={{ marginTop: "12px" }}>
                  <Link className="pill pill-dark" href="/shop">Browse shop</Link>
                </div>
              </article>
            ) : (
              items.map((item) => (
                <article key={item.id} className="testimonial-card">
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>{item.name}</h3>
                  <p style={{ marginBottom: "8px" }}>INR {item.price} each</p>
                  <div className="cta-actions">
                    <button className="pill" type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <button className="pill" type="button" disabled>
                      Qty {item.quantity}
                    </button>
                    <button className="pill" type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                    <button className="pill" type="button" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>

          {items.length > 0 && (
            <article className="packaging-card" style={{ marginTop: "18px" }}>
              <h3>Subtotal: INR {total}</h3>
              <p>For shipping and custom requests, complete order via Instagram DM.</p>
              <div className="cta-actions" style={{ marginTop: "12px" }}>
                <button className="pill pill-dark" type="button" onClick={handleCheckout}>
                  Checkout on Instagram
                </button>
                <button className="pill" type="button" onClick={clearCart}>
                  Clear cart
                </button>
              </div>
            </article>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
