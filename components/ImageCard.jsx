export default function ImageCard({ src, alt, title, subtitle }) {
  return (
    <figure className="image-card">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      {(title || subtitle) && (
        <figcaption>
          {title && <strong>{title}</strong>}
          {subtitle && <span>{subtitle}</span>}
        </figcaption>
      )}
    </figure>
  );
}
