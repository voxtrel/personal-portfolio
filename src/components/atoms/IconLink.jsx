import { NavLink } from "react-router-dom";
import Icon from "./Icon";

export default function IconLink({
  href,
  to,
  label,
  title,
  iconSrc,
  size,
  className = "",
  imgClassName = "",
  newTab = true,
  children,
}) {
  const common = `transition-opacity inline-flex items-center ${className}`;

  if (to) {
    return (
      <NavLink to={to} aria-label={label} title={title} className={common}>
        {children ? (
          children
        ) : (
          <Icon src={iconSrc} size={size} className={imgClassName} />
        )}
      </NavLink>
    );
  }

  return (
    <a
      href={href ?? "#"}
      aria-label={label}
      title={title}
      className={common}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
    >
      {children ? (
        children
      ) : (
        <Icon src={iconSrc} size={size} className={imgClassName} />
      )}
    </a>
  );
}
