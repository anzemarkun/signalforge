import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border-b border-hairline">
      <div className="container-x py-28 md:py-40">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-iron">
          404 · Not found
        </p>
        <h1 className="mt-6 text-4xl font-medium tracking-tighter2 md:text-6xl">
          That page doesn't exist.
        </h1>
        <p className="mt-6 max-w-prose2 text-iron">
          The link may be old or the page has moved. Head back to the homepage
          or jump to services.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Home
          </Link>
          <Link href="/services" className="btn-secondary">
            Services
          </Link>
        </div>
      </div>
    </section>
  );
}
