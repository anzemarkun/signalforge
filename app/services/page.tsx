import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three engagements for industrial B2B companies: Market Mapping Sprint, Lead Qualification Retainer, and Commercial Intelligence / Market Entry Support.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    id: "market-mapping",
    num: "01",
    name: "Market Mapping Sprint",
    format: "Fixed scope · 2–4 weeks",
    intro:
      "A structured read of the market you actually sell into — or the one you're about to enter. The output is a sharp ICP, a ranked target account universe, and a clear competitive picture.",
    forWhom: [
      "Industrial SMEs with a vague or out-of-date ICP",
      "Founders deciding which segment to commit to next",
      "Sales-led teams whose pipeline forecasts feel like guesses",
    ],
    deliverables: [
      "Defined ICP with disqualifiers, not just qualifiers",
      "Ranked account universe with reasoning per tier",
      "Buying triggers and likely entry points by segment",
      "Competitor map with positioning and gaps",
      "Written brief and a 60-minute working session",
    ],
    outcomes: [
      "Reps stop dialling accounts that were never going to close",
      "Marketing and sales agree on who is, and is not, a buyer",
      "Founder time goes to the segments that actually move",
    ],
  },
  {
    id: "lead-qualification",
    num: "02",
    name: "Lead Qualification Retainer",
    format: "Monthly retainer · Ongoing",
    intro:
      "Continuous qualification of inbound and outbound leads against a sharp ICP. The retainer is an upstream filter on your pipeline so your team works the right accounts and disqualifies the rest early.",
    forWhom: [
      "Teams with noisy inbound and no triage layer",
      "Outbound teams burning cycles on broad lists",
      "Founders who want to remove themselves from first-touch qualification",
    ],
    deliverables: [
      "Qualification framework tailored to your ICP and offer",
      "Weekly triage of new inbound and outbound leads",
      "Tiered handover (A / B / C) with reasoning",
      "Monthly pattern review: what's converting, what's not",
      "Recommendations to tighten ICP, list, or messaging",
    ],
    outcomes: [
      "Senior reps see only A-tier conversations",
      "Lower CAC on the accounts that actually close",
      "A clearer signal on where the market is moving in real time",
    ],
  },
  {
    id: "market-entry",
    num: "03",
    name: "Commercial Intelligence / Market Entry",
    format: "Project · 4–8 weeks",
    intro:
      "For companies entering a new European market, a new vertical, or evaluating a strategic pivot. A grounded read on opportunity size, route to market, competitive reality, and the first 30–50 accounts to engage.",
    forWhom: [
      "Export-oriented manufacturers entering Germany, Nordics, or Central Europe",
      "Technical product companies evaluating a new vertical",
      "Defense-adjacent suppliers navigating procurement environments",
    ],
    deliverables: [
      "Market sizing and demand assessment",
      "Channel and route-to-market options with trade-offs",
      "Regulatory, procurement, and structural considerations",
      "Competitive landscape and likely incumbents",
      "Initial target account list with engagement angles",
    ],
    outcomes: [
      "A go / no-go decision backed by actual structure",
      "If go: a runway plan and an account list to start with",
      "If no-go: a documented reason, not a hunch",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="container-x py-20 md:py-28">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tighter2 md:text-6xl">
            Three engagements. One job: cleaner commercial signal.
          </h1>
          <p className="mt-8 max-w-prose2 text-lg text-steel">
            Each offer is built around a specific commercial question. Scopes
            are tight, deliverables are concrete, and every engagement ends in
            something your team can act on the same week.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className="btn-secondary"
              >
                {s.num} · {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {services.map((s) => (
        <section key={s.id} id={s.id} className="border-b border-hairline scroll-mt-24">
          <div className="container-x py-20">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-4">
                <Eyebrow num={s.num}>{s.format}</Eyebrow>
                <h2 className="mt-6 display text-3xl md:text-4xl">{s.name}</h2>
                <p className="mt-6 max-w-prose2 text-iron">{s.intro}</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href="/contact#book" className="btn-primary">
                    Book a discovery call
                  </Link>
                </div>
              </div>

              <div className="md:col-span-8 space-y-12">
                <Block title="Who it's for" items={s.forWhom} />
                <Block title="Deliverables" items={s.deliverables} />
                <Block title="Outcomes" items={s.outcomes} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* One-pager download */}
      <section className="border-b border-hairline bg-paper">
        <div className="container-x grid gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow num="04">One-page service summary</Eyebrow>
            <h2 className="mt-6 display text-3xl md:text-4xl">
              Take it to your team.
            </h2>
            <p className="mt-6 max-w-prose2 text-iron">
              A single-page PDF summarising the three engagements, scopes, and
              what a typical week looks like. Useful when introducing the work
              internally before a call.
            </p>
          </div>
          <div className="md:col-span-5 md:pt-10">
            <Link href="/contact?topic=one-pager" className="btn-primary">
              Request the one-pager
            </Link>
            <p className="mt-3 text-xs text-iron">
              Sent by email within one business day.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure which one fits?"
        body="A 30-minute discovery call is usually enough to point you at the right engagement — or tell you honestly that this isn't the work you need."
      />
    </>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
        {items.map((i) => (
          <li key={i} className="flex gap-4 py-4">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-ember" />
            <span className="text-steel">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
