import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="The Crochet Corner home">
        <span className="brand-logo" aria-hidden="true">
          <img src="/logo.png" alt="" loading="eager" decoding="async" />
        </span>
        <span className="brand-text">
          <strong>The Crochet Corner</strong>
          <small>HANDMADE STUDIO</small>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Primary">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/#story">Our Story</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="header-actions">
        <Link className="pill" href="/account">Account</Link>
        <Link className="pill" href="/cart">Cart</Link>
        <Link className="pill pill-dark" href="/shop">Shop</Link>
      </div>
    </header>
  );
}
