import ImageSkeleton from "../molecules/ImageSkeleton";

export default function Avatar({
  src,
  alt = "",
  size,
  className = "",
  imgClassName = "",
  as = "figure",
  skeletonClassName = "rounded-full",
}) {
  const Tag = as;

  const dimensionStyle =
    typeof size === "number" ? { width: size, height: size } : undefined;

  return (
    <Tag className={className} style={dimensionStyle}>
      <ImageSkeleton
        src={src}
        alt={alt}
        containerClassName="w-full h-full"
        className={imgClassName}
        skeletonClassName={skeletonClassName}
      />
    </Tag>
  );
}
