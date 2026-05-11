import type { Metadata } from "next";
import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a discovery call with Signal Forge or send an inquiry. One senior operator replies — within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="container-x py-20 md:py-28">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tighter2 md:text-6xl">
            Start with a 30-minute call — or a short note.
          </h1>
          <p className="mt-8 max-w-prose2 text-lg text-steel">
            Either route works. The call is faster if you have a specific
            commercial question in mind. The form is fine if you'd prefer to
            scope it in writing first.
          </p>
        </div>
      </section>

      <section id="book" className="border-b border-hairline scroll-mt-24">
        <div className="container-x grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow num="01">Book a discovery call</Eyebrow>
            <h2 className="mt-6 display text-3xl md:text-4xl">
              30 minutes. No pitch deck.
            </h2>
            <p className="mt-6 max-w-prose2 text-iron">
              The call is a working conversation: what you're trying to
              decide, who you sell to, where the friction is. If the work
              doesn't fit, I'll say so on the call.
            </p>
            <div className="mt-10">
              <Link
                href={site.bookingUrl}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open booking page
              </Link>
              <p className="mt-3 text-xs text-iron">
                Opens an external scheduler. Calendar invite sent immediately.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 md:border-l md:border-hairline md:pl-12">
            <Eyebrow num="02">Or send an inquiry</Eyebrow>
            <h2 className="mt-6 display text-3xl md:text-4xl">
              Tell me what you're working on.
            </h2>
            <p className="mt-6 max-w-prose2 text-iron">
              A short note is enough to start. Reply within one business day.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-x grid gap-10 py-16 md:grid-cols-3">
          <Trust k="Response time" v="Within one business day" />
          <Trust k="Confidentiality" v="NDA on request — before any detail" />
          <Trust k="No sales sequence" v="One reply from one person. That's it." />
        </div>
      </section>

      <section className="border-b border-hairline bg-paper">
        <div className="container-x grid gap-10 py-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow num="03">Prefer email?</Eyebrow>
            <h2 className="mt-6 display text-3xl md:text-4xl">
              Direct line.
            </h2>
            <p className="mt-6 max-w-prose2 text-iron">
              For anything sensitive, or if you'd rather not use a form, email
              works just as well.
            </p>
          </div>
          <div className="md:col-span-5 md:pt-10">
            <a className="btn-primary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Trust({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="eyebrow">{k}</p>
      <p className="mt-3 text-steel">{v}</p>
    </div>
  );
}
