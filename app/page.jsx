import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TestimonialCard from "../components/TestimonialCard";
import ImageCard from "../components/ImageCard";
import FeatureSection from "../components/FeatureSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const socialCards = [
  {
    quote:
      "Everything arrived beautifully wrapped. It felt so soft and thoughtful that I ordered another one for myself.",
    author: "Verified customer"
  },
  {
    quote:
      "The quality is beautiful and the finishing feels very premium. It's handmade with so much love and care.",
    author: "Repeat customer"
  }
];

export default function HomePage() {
  return (
    <div className="page-wrap">
      <Navbar />

      <main>
        <Hero />

        <section className="social-section" id="story">
          <div className="social-heading">
            <h2>Loved by gifters &amp; keepers.</h2>
            <p>
              Customers come to gift, then return to keep one for themselves.
              Each piece is handmade to feel personal, thoughtful, and lasting.
            </p>
          </div>

          <div className="social-grid">
            <div className="social-quotes">
              {socialCards.map((item) => (
                <TestimonialCard key={item.author} quote={item.quote} author={item.author} />
              ))}
            </div>

            <div className="social-images">
              <ImageCard
                src="/video-ref/frame-3.jpg"
                alt="Crochet bouquet collection"
              />
              <ImageCard
                src="/video-ref/frame-4.jpg"
                alt="Handmade crochet keepsakes"
              />
              <ImageCard
                src="/video-ref/frame-5.jpg"
                alt="Premium crochet gifts and accessories"
              />
            </div>
          </div>
        </section>

        <FeatureSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
