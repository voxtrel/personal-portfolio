export default function Contact() {
  return (
    <section className="py-12 space-y-4">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <a className="link" href="mailto:you@example.com">you@example.com</a>
      <p className="text-sm text-base-content/70">
        GitHub:{" "}
        <a className="link" href="https://github.com/yourhandle" target="_blank" rel="noreferrer">
          yourhandle
        </a>
      </p>
    </section>
  );
}
