"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { products } from "../../lib/products";
import { addToCart } from "../../lib/cart";

export default function ShopPage() {
  const [addedId, setAddedId] = useState(null);

  const onAdd = (product) => {
    addToCart(product);
    setAddedId(product.id);
    window.setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <div className="page-wrap">
      <Navbar />
      <main>
        <section className="feature-section" id="shop">
          <div className="feature-heading">
            <h2>Shop Handmade Crochet</h2>
            <p>Browse available pieces. DM us on Instagram for customization requests.</p>
          </div>

          <div className="feature-grid">
            {products.map((product) => (
              <article key={product.id} className="testimonial-card">
                <div className="image-card" style={{ minHeight: "240px", marginBottom: "14px" }}>
                  <img src={product.image} alt={product.name} />
                </div>
                <h3 style={{ fontSize: "1.6rem", marginBottom: "8px" }}>{product.name}</h3>
                <p style={{ marginBottom: "10px" }}>{product.description}</p>
                <p style={{ marginBottom: "14px", color: "var(--text)", fontWeight: 600 }}>
                  INR {product.price}
                </p>
                <button className="pill pill-dark" type="button" onClick={() => onAdd(product)}>
                  {addedId === product.id ? "Added" : "Add to cart"}
                </button>
              </article>
            ))}
          </div>

          <div className="cta-actions" style={{ marginTop: "18px" }}>
            <Link className="pill" href="/cart">Go to cart</Link>
            <a className="pill" href="https://www.instagram.com/thecrochet_.corner/" target="_blank" rel="noreferrer">
              DM on Instagram
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
