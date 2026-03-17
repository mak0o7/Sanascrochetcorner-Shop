import ImageCard from "./ImageCard";

const featureItems = [
  {
    src: "/video-ref/frame-6.jpg",
    alt: "Handmade crochet bouquet showcase"
  },
  {
    src: "/video-ref/frame-2.jpg",
    alt: "Premium cotton yarn crochet pieces"
  },
  {
    src: "/video-ref/frame-4.jpg",
    alt: "Custom crochet gift collections"
  }
];

export default function FeatureSection() {
  return (
    <section className="feature-section" id="shop">
      <div className="feature-heading">
        <h2>Made with care, shaped for you.</h2>
        <p>
          Every crochet piece is handmade to feel gentle in the hand, beautiful in the home,
          and treasured when gifted. Customization available for all items.
        </p>
      </div>
      <div className="feature-grid">
        {featureItems.map((item) => (
          <ImageCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
