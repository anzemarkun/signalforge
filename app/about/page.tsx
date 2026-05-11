import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Signal Forge is a one-person commercial intelligence practice for industrial B2B companies. Background in sales, business development, steel, defense, and macro-aware market analysis.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="container-x py-20 md:py-28">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tighter2 md:text-6xl">
            Built by someone who has actually sold into industrial markets.
          </h1>
          <p className="mt-8 max-w-prose2 text-lg text-steel">
            Signal Forge is a deliberately small practice. One operator, doing
            the work, for a short list of industrial and technical clients at a
            time.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow num="01">Founder story</Eyebrow>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-steel">
            <p>
              I've spent my career on the commercial side of industrial
              businesses — sales, business development, market analysis, and
              the kind of work that decides where a quarter actually lands.
            </p>
            <p>
              The pattern was always the same. The companies that grew
              cleanly were not the ones with the most activity. They were the
              ones with the clearest read on their market: who the real buyers
              were, which accounts were worth the effort, which were a slow
              loss waiting to happen.
            </p>
            <p>
              Signal Forge exists to make that clarity available to industrial
              SMEs and technical companies that don't want — or need — an
              agency.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow num="02">Background</Eyebrow>
            <h2 className="mt-6 display text-3xl md:text-4xl">
              Where the perspective comes from.
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-hairline border-y border-hairline">
              {[
                {
                  k: "Sales & business development",
                  v: "Direct experience selling and developing accounts in industrial and technical B2B environments — including long sales cycles, technical buyers, and procurement.",
                },
                {
                  k: "Industrial sectors",
                  v: "Steel and metals, defense-adjacent supply chains, industrial components, and capital equipment.",
                },
                {
                  k: "Market analysis",
                  v: "Comfortable with structural reads of demand, competitor positioning, and the trends that move industrial buying behaviour.",
                },
                {
                  k: "Macro & investing thinking",
                  v: "A habit of looking at industries through capital flows, cycles, and policy shifts — not just last quarter's pipeline report.",
                },
                {
                  k: "B2B communication",
                  v: "Writing and positioning that translates technical reality into commercial language a buyer will actually act on.",
                },
              ].map((b) => (
                <li key={b.k} className="grid gap-4 py-6 md:grid-cols-12">
                  <p className="md:col-span-4 font-medium tracking-tightish">
                    {b.k}
                  </p>
                  <p className="md:col-span-8 text-iron">{b.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow num="03">Philosophy</Eyebrow>
            <h2 className="mt-6 display text-3xl md:text-4xl">
              Better decisions, not more decks.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-steel">
            <p>
              Most commercial mistakes in industrial B2B are made before the
              first call is dialled. The wrong segment. The wrong list. The
              wrong story for the actual buyer.
            </p>
            <p>
              The work here is upstream of execution. Done well, it makes
              outreach short and pipeline forecasts believable. Done badly, it
              becomes a 60-page deck no one opens.
            </p>
            <p>
              The bias is toward concrete output: a ranked account list, a
              tight ICP, a clear read on a new geography. Things a commercial
              team can pick up on a Monday morning.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow num="04">How I work</Eyebrow>
          </div>
          <div className="md:col-span-8">
            <ul className="grid gap-y-4 gap-x-10 text-steel md:grid-cols-2">
              {[
                "Small number of clients at any time",
                "Senior operator on every engagement",
                "NDAs and discretion as default",
                "Fixed scopes where possible",
                "Written briefs, not slide theatre",
                "No drip campaigns or follow-up funnels",
              ].map((l) => (
                <li key={l} className="flex gap-3 border-t border-hairline pt-4">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-ember" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <Link href="/contact#book" className="btn-primary">
                Book a discovery call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want a senior read on your market?"
        body="Start with a 30-minute discovery call. If the work doesn't fit, I'll say so."
      />
    </>
  );
}
