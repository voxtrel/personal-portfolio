import { NavLink } from "react-router-dom";

const base = "btn";
const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  ghost: "btn-ghost",
  outline: "btn-outline",
  link: "btn-link",
};

export default function Button({
  as: As = "button",
  to,
  href,
  target,
  rel,
  type = "button",
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  const classes = `${base} ${
    variants[variant] ?? variants.primary
  } ${className}`;

  if (As === NavLink) {
    return (
      <NavLink to={to ?? "#"} className={classes} {...rest}>
        {children}
      </NavLink>
    );
  }

  if (As === "a") {
    return (
      <a
        href={href ?? "#"}
        target={target}
        rel={rel}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
