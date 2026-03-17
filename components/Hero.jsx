import ImageCard from "./ImageCard";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="badge">Handmade crochet bouquets, keepsakes & accessories</p>
        <h1>Soft, handmade crochet pieces that feel like a warm hug.</h1>
        <p className="hero-copy">
          Thoughtfully crafted with love and premium cotton yarn. From crochet bouquets and custom keepsakes
          to accessories and gift sets—each piece is made to feel personal, soft, and lasting.
        </p>
      </div>

      <div className="hero-right hero-collage">
        <ImageCard
          src="/video-ref/frame-1.jpg"
          alt="Handmade crochet collection showcase"
        />

        <div className="hero-stack">
          <ImageCard
            src="/video-ref/frame-2.jpg"
            alt="Premium crochet bouquet and keepsakes"
          />

          <article className="review-card">
            <p>
              "Softly crafted, beautifully packaged, and made with so much care. It felt special from the moment it arrived."
            </p>
            <strong>Customer verified</strong>
          </article>
        </div>
      </div>
    </section>
  );
}
