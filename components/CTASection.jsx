import Link from "next/link";

export default function CTASection() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-left">
        <h2>Ready to bring home handmade softness?</h2>
        <p>
          Browse our collection of ready pieces, or DM us for custom colors, personalized notes,
          and made-to-order requests. We ship all over India with thoughtful packaging.
        </p>
        <div className="cta-actions">
          <Link className="pill pill-dark" href="/shop">View items</Link>
          <a className="pill" href="https://www.instagram.com/thecrochet_.corner/" target="_blank" rel="noreferrer">
            DM on Instagram
          </a>
        </div>
      </div>

      <aside className="packaging-card">
        <h3>Handmade with care</h3>
        <p>
          Every order is carefully packaged with love. Customization available for colors, sizes, and themes.
          Ships all over India.
        </p>
      </aside>
    </section>
  );
}
