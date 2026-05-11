import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about Signal Forge — how the work differs from an agency, which industries it serves, retainers vs projects, and what results to expect.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "How is this different from an agency?",
    a: "Agencies sell hours through an account team — coordinators, junior researchers, and a senior lead who appears at the kickoff. Signal Forge is one senior operator doing the work directly, with a deliberately small client list. You get judgment, not throughput.",
  },
  {
    q: "Which industries do you work with?",
    a: "Industrial and technical B2B. That includes manufacturing, steel and metals, industrial components, capital equipment, defense-adjacent supply, energy, and B2B technical software with industrial buyers. If your buyer is technical and the sales cycle is non-trivial, you're in the right place.",
  },
  {
    q: "Do you provide outreach execution?",
    a: "No. There are no SDRs and no outbound execution. Signal Forge sharpens the input to outreach — the ICP, the account list, the qualification logic, the entry angles. Execution stays with your team or a partner you trust.",
  },
  {
    q: "How fast can we start?",
    a: "Most engagements start within one to two weeks of the discovery call. Market mapping sprints typically deliver in two to four weeks. Retainers begin the week after onboarding.",
  },
  {
    q: "Do you work on retainers or projects?",
    a: "Both. Market mapping and market entry are fixed-scope projects. Lead qualification is a monthly retainer. The right shape depends on whether you're solving a one-off question or running an ongoing pipeline.",
  },
  {
    q: "Is this suitable for small companies?",
    a: "Yes — in many cases it's a better fit for SMEs than for large enterprises. The cost is lower than a full-time hire, and the work directly removes load from the founder or head of sales. The constraint is fit, not size: there needs to be a real commercial question to answer.",
  },
  {
    q: "Can you support market entry in Europe?",
    a: "Yes. Germany, the Nordics, the DACH region, and Central Europe are common. The work covers demand structure, route to market, competitive picture, regulatory and procurement context, and a target account list — enough to make a clean go / no-go decision.",
  },
  {
    q: "What kind of results should clients expect?",
    a: "Realistic expectations: a tighter ICP, fewer wrong accounts in pipeline, less time wasted on first-touch qualification, and more confidence in market-entry decisions. No promises of magic 3x pipeline numbers — that's not how this work behaves, and anyone claiming otherwise is selling something else.",
  },
  {
    q: "How do you handle confidentiality?",
    a: "NDAs are welcome and signed before any commercial detail is discussed. Output is yours. Engagements in sensitive sectors are handled with discretion as the default.",
  },
  {
    q: "How is the work priced?",
    a: "Fixed-scope projects are priced per engagement. Retainers are priced monthly with a clear minimum commitment. Specifics are discussed once we both agree the work fits — pricing without context tends to be misleading.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="container-x py-20 md:py-28">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tighter2 md:text-6xl">
            Honest answers to the questions that actually come up.
          </h1>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x py-16">
          <dl className="divide-y divide-hairline border-y border-hairline">
            {faqs.map((f, i) => (
              <div key={f.q} className="grid gap-6 py-8 md:grid-cols-12">
                <div className="md:col-span-1">
                  <p className="num">{String(i + 1).padStart(2, "0")}</p>
                </div>
                <dt className="md:col-span-4 text-lg font-medium tracking-tightish">
                  {f.q}
                </dt>
                <dd className="md:col-span-7 max-w-prose2 text-iron">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection
        title="Still have a question?"
        body="If there's something specific to your situation, ask it on a discovery call. Honest answers — including 'this isn't the right fit' when that's true."
      />
    </>
  );
}
