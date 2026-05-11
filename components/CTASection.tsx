import Link from "next/link";

export default function CTASection({
  title = "Quieter pipeline. Sharper accounts.",
  body = "Most industrial sales teams don't need more leads — they need fewer wrong ones. Start with a 30-minute discovery call.",
  primaryLabel = "Book a discovery call",
  primaryHref = "/contact#book",
  secondaryLabel = "Send an inquiry",
  secondaryHref = "/contact",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="border-t border-hairline bg-forge text-mist">
      <div className="container-x grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist/60">
            Next step
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tighter2 md:text-5xl">
            {title}
          </h2>
        </div>
        <div className="md:col-span-5 md:pt-12">
          <p className="max-w-prose2 text-mist/80">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center border border-ember bg-ember px-5 py-3 text-sm font-medium text-mist hover:bg-emberDark hover:border-emberDark"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center border border-mist/30 px-5 py-3 text-sm font-medium text-mist hover:border-mist"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
