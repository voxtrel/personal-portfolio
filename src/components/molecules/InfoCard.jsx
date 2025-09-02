export default function InfoCard({
  title,
  children,
  className = "card bg-base-100 w-full shadow-sm",
  bodyClassName = "card-body",
  titleClassName = "card-title",
}) {
  return (
    <div className={className}>
      <div className={bodyClassName}>
        {title ? <h2 className={titleClassName}>{title}</h2> : null}
        {children}
      </div>
    </div>
  )
}
