import { useState } from "react";

export default function ImageSkeleton({
  src,
  alt,
  className = "",
  containerClassName = "",
  skeletonClassName = "",
  onClick,
  draggable = false,
  loading = "lazy",
  decoding = "async",
  onLoad,
  onError,
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative ${containerClassName}`}>
      {!loaded && !errored && (
        <div
          className={`skeleton absolute inset-0 ${skeletonClassName}`}
          aria-hidden="true"
        />
      )}

      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        draggable={draggable}
        onClick={onClick}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          setErrored(true);
          setLoaded(true);
          onError?.(e);
        }}
        className={`${className} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {errored && (
        <div className="absolute inset-0 grid place-items-center text-sm text-base-content/60 bg-base-200 rounded-lg">
          Image failed to load
        </div>
      )}
    </div>
  );
}
