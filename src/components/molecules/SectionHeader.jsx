import { Heading } from "../atoms";

export default function SectionHeader({
  title,
  subtitle,
  level = 1,
  align,
  className = "",
  titleClassName = "text-3xl md:text-4xl font-bold",
  subtitleClassName = "mt-3 text-sm md:text-lg leading-relaxed opacity-90",
}) {
  return (
    <div className={className}>
      <Heading level={level} align={align} className={titleClassName}>
        {title}
      </Heading>
      {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}
    </div>
  );
}
