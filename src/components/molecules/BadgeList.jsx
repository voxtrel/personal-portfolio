import { Badge } from "../atoms";

export default function BadgeList({
  items = [],
  variant = "outline",
  className = "",
  badgeClassName = "",
}) {
  if (!items?.length) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((t) => (
        <Badge key={t} variant={variant} className={badgeClassName}>
          {t}
        </Badge>
      ))}
    </div>
  );
}
