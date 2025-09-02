const styles = {
  1: "text-3xl md:text-5xl font-bold tracking-tight",
  2: "text-2xl md:text-3xl font-semibold",
  3: "text-xl md:text-2xl font-semibold",
  4: "text-lg md:text-xl font-semibold",
};

export default function Heading({
  level = 1,
  align = "left",
  className = "",
  children,
}) {
  const Tag = `h${level}`;
  const AlignClass = align === "center" ? "text-center" : align === "left" ? "text-left" : ""
  return (
    <Tag className={`${styles[level] ?? styles[2]} ${AlignClass} ${className}`}>
      {children}
    </Tag>
  );
}
