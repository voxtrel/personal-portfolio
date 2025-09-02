export default function Icon({ src, size, alt = "", className = "" }) {
  const dimProps = typeof size === "number" ? { width: size, height: size } : {}
  return (
    <img
      src={src}
      alt={alt}
      {...dimProps}
      className={`inline-block align-middle ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
