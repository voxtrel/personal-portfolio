export default function Section({
  id,
  className = "",
  as = "section",
  children,
}) {
  const Tag = as;
  return (
    <Tag id={id} className={`py-10 md:py-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">{children}</div>
    </Tag>
  );
}
