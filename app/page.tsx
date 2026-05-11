import Link from "next/link";
import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Signal Forge — Commercial intelligence for industrial B2B",
  description:
    "Signal Forge helps industrial and technical B2B companies find the right accounts, qualify the best opportunities, and enter new European markets without wasting sales cycles.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline">
        <div className="container-x grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-8">
            <Eyebrow num="01">Commercial intelligence · Industrial B2B</Eyebrow>
            <h1 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tighter2 md:text-6xl">
              Sharper accounts.
              <br />
              Better pipeline.
              <br />
              Fewer wasted cycles.
            </h1>
            <p className="mt-8 max-w-prose2 text-lg text-steel">
              Signal Forge helps industrial and technical B2B companies find the
              right target accounts, qualify the best opportunities, and move into
              new European markets with conviction — without the noise of a
              generic lead-gen agency.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact#book" className="btn-primary">
                Book a discovery call
              </Link>
              <Link href="/services" className="btn-secondary">
                See services
              </Link>
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-iron">
              30-minute call · No pitch deck · No obligation
            </p>
          </div>

          <aside className="md:col-span-4 md:border-l md:border-hairline md:pl-10">
            <div className="space-y-8">
              <Stat k="Built for" v="Industrial SMEs · Defense-adjacent · Technical products" />
              <Stat k="Focus" v="Account research · Qualification · Market mapping" />
              <Stat k="Region" v="Europe-wide · Cross-border market entry" />
            </div>
          </aside>
        </div>
      </section>

      {/* Value prop */}
      <section className="border-b border-hairline">
        <div className="container-x grid gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow num="02">What we do</Eyebrow>
            <h2 className="mt-6 display text-3xl md:text-4xl">
              Commercial clarity, not more activity.
            </h2>
          </div>
          <div className="md:col-span-8 md:pt-2">
            <p className="max-w-prose2 text-lg text-steel">
              Most industrial sales teams are not short on activity — they're
              short on signal. Wrong accounts, vague ICPs, and over-broad
              outreach quietly burn quarters.
            </p>
            <p className="mt-6 max-w-prose2 text-lg text-steel">
              Signal Forge sits between strategy and execution. The work is
              focused, analytical, and built around your specific market — so
              your sales team spends time on accounts that can actually close.
            </p>
          </div>
        </div>
      </section>

      {/* Problems solved */}
      <section className="border-b border-hairline">
        <div className="container-x py-20">
          <Eyebrow num="03">Problems we solve</Eyebrow>
          <h2 className="mt-6 display text-3xl md:text-4xl">
            If any of this sounds familiar.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Vague ICP, broad outreach",
                b: "Your team is calling everyone who looks vaguely relevant. Conversion is patchy and the pipeline is hard to forecast.",
              },
              {
                t: "Wrong accounts in pipeline",
                b: "Deals stall because the use case never really fit. Sales hours are spent qualifying out, not qualifying in.",
              },
              {
                t: "New market, no map",
                b: "You're considering Germany, the Nordics, or Central Europe — but you don't yet know who the real buyers are, or who already serves them.",
              },
              {
                t: "Inbound is noisy",
                b: "Leads arrive but you can't tell which ones deserve a senior conversation. Reps default to first-come-first-served.",
              },
              {
                t: "Founder-led sales doesn't scale",
                b: "The founder closes everything — and that's becoming the ceiling. You need a target list that anyone capable can work.",
              },
              {
                t: "Sector shift, unclear positioning",
                b: "Your market is moving (defense, energy, reshoring). You need a current read on demand and competitors, not last year's deck.",
              },
            ].map((c) => (
              <div key={c.t} className="card">
                <h3 className="text-lg font-medium tracking-tightish">{c.t}</h3>
                <p className="mt-3 text-sm text-iron">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-hairline">
        <div className="container-x py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow num="04">Services</Eyebrow>
              <h2 className="mt-6 display text-3xl md:text-4xl">
                Three ways to engage.
              </h2>
              <p className="mt-6 max-w-prose2 text-iron">
                Each engagement is scoped against a specific commercial
                question. No retainers padded with reporting.
              </p>
              <Link href="/services" className="btn-ghost mt-8">
                See full service detail →
              </Link>
            </div>
            <div className="md:col-span-8 space-y-px bg-hairline">
              {services.map((s, i) => (
                <article key={s.title} className="bg-paper p-8">
                  <div className="flex items-baseline justify-between gap-6">
                    <p className="num">0{i + 1}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-iron">
                      {s.format}
                    </p>
                  </div>
                  <h3 className="mt-4 text-2xl font-medium tracking-tightish">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-prose2 text-iron">{s.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-b border-hairline">
        <div className="container-x grid gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow num="05">Who it's for</Eyebrow>
            <h2 className="mt-6 display text-3xl md:text-4xl">
              Built for operators, not marketers.
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="grid gap-y-4 gap-x-10 text-steel md:grid-cols-2">
              {[
                "Industrial SMEs scaling beyond founder-led sales",
                "Export-oriented manufacturers entering new EU markets",
                "Technical product companies with complex buyers",
                "Defense-adjacent suppliers navigating procurement",
                "Founders evaluating a new geography or vertical",
                "Sales-led teams that need cleaner pipeline quality",
              ].map((l) => (
                <li key={l} className="flex gap-3 border-t border-hairline pt-4">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-ember" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-b border-hairline">
        <div className="container-x py-20">
          <Eyebrow num="06">Why Signal Forge</Eyebrow>
          <h2 className="mt-6 display text-3xl md:text-4xl">
            A senior operator on the work — not an account team.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                t: "Industrial fluency",
                b: "Background across steel, defense, and technical B2B. The questions sound right because the work has been done before.",
              },
              {
                t: "Analytical, not anecdotal",
                b: "Account lists are built from market data, procurement signals, and structural reasoning — not a scraped LinkedIn export.",
              },
              {
                t: "Commercial judgment",
                b: "Sales, business development, and macro-aware thinking sit in the same head. Output is built to be sold from, not just read.",
              },
              {
                t: "Single point of contact",
                b: "You work directly with the person doing the work. No handoffs, no juniors, no rotating account managers.",
              },
              {
                t: "Tight scope, real deliverables",
                b: "Every engagement ends in something a sales team can pick up and work the next morning.",
              },
              {
                t: "Discretion by default",
                b: "Suitable for sensitive sectors. NDAs welcome. Findings are yours.",
              },
            ].map((c) => (
              <div key={c.t}>
                <h3 className="text-lg font-medium tracking-tightish">{c.t}</h3>
                <p className="mt-3 text-iron">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-hairline bg-paper">
        <div className="container-x py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow num="07">Process</Eyebrow>
              <h2 className="mt-6 display text-3xl md:text-4xl">
                Four steps. No theatre.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ol className="divide-y divide-hairline border-y border-hairline">
                {process.map((p, i) => (
                  <li key={p.title} className="grid gap-4 py-6 md:grid-cols-12">
                    <div className="md:col-span-2">
                      <p className="num">0{i + 1}</p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="font-medium tracking-tightish">{p.title}</p>
                    </div>
                    <p className="text-iron md:col-span-7">{p.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="border-b border-hairline">
        <div className="container-x grid gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow num="08">FAQ</Eyebrow>
            <h2 className="mt-6 display text-3xl md:text-4xl">
              Common questions.
            </h2>
            <Link href="/faq" className="btn-ghost mt-8">
              Read all FAQs →
            </Link>
          </div>
          <div className="md:col-span-8">
            <dl className="divide-y divide-hairline border-y border-hairline">
              {faqTeaser.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="font-medium tracking-tightish">{f.q}</dt>
                  <dd className="mt-2 max-w-prose2 text-iron">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-iron">
        {k}
      </p>
      <p className="mt-2 text-forge">{v}</p>
    </div>
  );
}

const services = [
  {
    title: "Market Mapping Sprint",
    format: "Fixed scope · 2–4 weeks",
    summary:
      "A structured read of your target market: real buyers, buying triggers, competitors, and a ranked account universe you can actually act on.",
  },
  {
    title: "Lead Qualification Retainer",
    format: "Monthly · Ongoing",
    summary:
      "Inbound and outbound leads triaged against a sharp ICP. Your reps spend time on the accounts that can move — not the ones that look busy.",
  },
  {
    title: "Commercial Intelligence / Market Entry",
    format: "Project · 4–8 weeks",
    summary:
      "Country, channel, and vertical assessments for entering a new European market — sized opportunity, route to market, and a target list to start with.",
  },
];

const process = [
  {
    title: "Discovery",
    body: "A focused call to understand your ICP, current pipeline, blockers, and the commercial decision you're trying to make.",
  },
  {
    title: "Market mapping",
    body: "Buyers, competitors, demand signals, and structural dynamics — mapped against your offer and capacity to deliver.",
  },
  {
    title: "Qualification",
    body: "Ranked target accounts with reasoning: why now, what they likely care about, and how to enter the conversation.",
  },
  {
    title: "Delivery & next steps",
    body: "Brief working session, written brief, and a clear handover. Optional follow-on retainer if you want continuity.",
  },
];

const faqTeaser = [
  {
    q: "How is this different from an agency?",
    a: "There is no account team. You work directly with one senior operator who has actually sold in industrial markets. The output is built to be used by a sales team — not admired in a slide deck.",
  },
  {
    q: "Do you provide outreach execution?",
    a: "No SDR-as-a-service. Signal Forge sharpens the input to outreach — the ICP, the target list, the qualification logic. Execution stays with your team or a partner you trust.",
  },
  {
    q: "Which industries do you work with?",
    a: "Industrial and technical B2B: manufacturing, steel and metals, defense-adjacent, energy, components, capital equipment, and industrial software.",
  },
];
