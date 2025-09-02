import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="max-w-5xl mx-auto w-full px-4 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">Page not found</h1>

      <p className="mt-2 text-base-content/70">
        The page you are looking for does not exist.
      </p>

      <div className="mt-6">
        <NavLink to="/" className="btn btn-primary">
          Go Back to Home
        </NavLink>
      </div>
    </section>
  );
}
