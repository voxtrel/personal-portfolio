export default function Badge({
  children,
  variant = "outline",
  className = "",
}) {
  const variantClass =
    {
      outline: "badge-outline",
      accent: "badge-accent",
      primary: "badge-primary",
      secondary: "badge-secondary",
      neutral: "badge-neutral",
      ghost: "badge-ghost",
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      error: "badge-error",
    }[variant] ?? "badge-outline";

  return (
    <span className={`badge whitespace-nowrap ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
