import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <div className="page-wrap">
      <Navbar />
      <main>
        <section className="cta-section" id="contact-page">
          <div className="cta-left">
            <h2>Contact The Crochet Corner</h2>
            <p>For orders, custom requests, and collaborations, reach out through Instagram or email.</p>
            <div className="cta-actions">
              <a className="pill pill-dark" href="https://www.instagram.com/thecrochet_.corner/" target="_blank" rel="noreferrer">
                Open Instagram
              </a>
              <a className="pill" href="mailto:hello@thecrochetcorner.com">
                Send Email
              </a>
            </div>
          </div>

          <aside className="packaging-card">
            <h3>Studio Details</h3>
            <p>Instagram: @thecrochet_.corner</p>
            <p>Email: hello@thecrochetcorner.com</p>
            <p>Location: Mangalore, India</p>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
