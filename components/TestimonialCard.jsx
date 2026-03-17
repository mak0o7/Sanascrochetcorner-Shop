export default function TestimonialCard({ quote, author }) {
  return (
    <article className="testimonial-card">
      <p>{quote}</p>
      <strong>{author}</strong>
    </article>
  );
}
