import { Button } from "../atoms"
import { NavLink } from "react-router-dom"

export default function CTAButtons({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button as={NavLink} to="/projects" variant="primary" className="shadow">Projects</Button>
      <Button as={NavLink} to="/about" variant="secondary" className="shadow">About me</Button>
      <Button as="a" href="/YANIEL_GONZALEZ_RESUME.pdf" target="_blank" rel="noreferrer" variant="accent">Resume</Button>
    </div>
  )
}
