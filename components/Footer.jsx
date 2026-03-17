import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <h4>The Crochet Corner</h4>
        <p>
          Handmade crochet bouquets, keepsakes, and accessories. Crafted with premium yarn and love in Mangalore, India.
        </p>
      </div>

      <div className="footer-links">
        <h5>Quick Links</h5>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/#story">Loved by Gifters</Link>
        <Link href="/contact">Contact Us</Link>
        <a href="https://www.instagram.com/thecrochet_.corner/" target="_blank" rel="noreferrer">Instagram</a>
      </div>

      <div className="footer-contact">
        <h5>Contact</h5>
        <a href="mailto:hello@thecrochetcorner.com">hello@thecrochetcorner.com</a>
        <a href="https://www.instagram.com/thecrochet_.corner/" target="_blank" rel="noreferrer">@thecrochet_.corner</a>
        <p>📍 Mangalore, India</p>
      </div>
    </footer>
  );
}
