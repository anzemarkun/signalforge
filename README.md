# Signal Forge

Market clarity for industrial growth.

This repository contains the production website for **Signal Forge** — a one-person commercial intelligence practice serving industrial B2B companies — and the brand/copy deliverables that informed it.

---

## 1. Brand & positioning summary

**Name.** Signal Forge
**Tagline.** Market clarity for industrial growth.
**Category.** Commercial intelligence / lead qualification for industrial B2B.
**One-line positioning.** Signal Forge helps industrial and technical B2B companies find the right target accounts, qualify the best opportunities, and enter new European markets without wasting sales cycles.

**Who it is for.**
- Industrial SMEs scaling beyond founder-led sales
- Export-oriented manufacturers entering new EU markets
- Technical product companies with complex buyers
- Defense-adjacent suppliers navigating procurement
- Founders evaluating a new geography or vertical
- Sales-led teams that need cleaner pipeline quality

**Tone.** Sharp, credible, premium, strategic, modern, concise, trustworthy, industrial. Not flashy. Not agency-coded.

**What the brand is not.**
- Not a lead-gen agency
- Not an SDR-as-a-service
- Not a generic "growth" play
- Not slide theatre — the deliverable is something a sales team can work the next morning

**Differentiators.**
1. A senior operator on the work — not an account team.
2. Industrial fluency: real background in steel, defense, and technical B2B.
3. Analytical, not anecdotal — structural reads of demand, not scraped lists.
4. Tight scopes, real deliverables, written briefs.
5. Discretion by default; NDAs welcome.

---

## 2. Sitemap

```
/                       Homepage
/about                  About / founder
/services               Services overview + detail
  #market-mapping       Market Mapping Sprint
  #lead-qualification   Lead Qualification Retainer
  #market-entry         Commercial Intelligence / Market Entry
/faq                    Full FAQ
/contact                Inquiry form + booking + email
  #book                 Booking section anchor

Utility:
/sitemap.xml            Generated
/robots.txt             Generated
/api/contact            Form endpoint (POST)
404                     Custom not-found page
```

**Internal linking suggestions.**
- Homepage hero → `/contact#book` (primary CTA) and `/services` (secondary).
- Each homepage service card → `/services#<slug>`.
- About page closing CTA → `/contact#book`.
- Services detail "Outcomes" blocks → `/contact?topic=<service>` to pre-fill intent.
- Footer surfaces three conversion paths: book call, send inquiry, request one-pager.

---

## 3. Homepage wireframe

```
┌──────────────────────────────────────────────────────────────┐
│  NAV    [logo] Signal Forge      Services  About  FAQ  CTA  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  01 / COMMERCIAL INTELLIGENCE · INDUSTRIAL B2B                │
│                                                              │
│  Sharper accounts.            │  Built for                   │
│  Better pipeline.             │  Industrial SMEs · Defense   │
│  Fewer wasted cycles.         │                              │
│                               │  Focus                       │
│  [sub-paragraph]              │  Account research · Qual.    │
│                               │                              │
│  [Book a discovery call]      │  Region                      │
│  [See services]               │  Europe-wide                 │
│  30-min · no pitch deck       │                              │
├──────────────────────────────────────────────────────────────┤
│  02 / WHAT WE DO                                             │
│  Commercial clarity, not more activity.                      │
│  [two-paragraph statement]                                   │
├──────────────────────────────────────────────────────────────┤
│  03 / PROBLEMS WE SOLVE                                      │
│  If any of this sounds familiar.                             │
│  [6 cards: ICP / wrong accounts / market entry / inbound /   │
│   founder-led / sector shift]                                │
├──────────────────────────────────────────────────────────────┤
│  04 / SERVICES                                               │
│  Three ways to engage.   │  [01 Market Mapping Sprint]       │
│  [paragraph + link]      │  [02 Lead Qualification Retainer] │
│                          │  [03 Market Entry / Intelligence] │
├──────────────────────────────────────────────────────────────┤
│  05 / WHO IT'S FOR                                           │
│  Built for operators, not marketers. [bulleted 2-col list]   │
├──────────────────────────────────────────────────────────────┤
│  06 / WHY SIGNAL FORGE                                       │
│  [3x2 grid: industrial fluency, analytical, judgment,        │
│   single point of contact, tight scope, discretion]          │
├──────────────────────────────────────────────────────────────┤
│  07 / PROCESS                                                │
│  Four steps. No theatre.   │  01 Discovery                   │
│                            │  02 Market mapping              │
│                            │  03 Qualification               │
│                            │  04 Delivery & next steps       │
├──────────────────────────────────────────────────────────────┤
│  08 / FAQ                                                    │
│  Common questions.    │  [3 expanded Q&A + link to /faq]     │
├──────────────────────────────────────────────────────────────┤
│  NEXT STEP — dark CTA band                                   │
│  Quieter pipeline. Sharper accounts.                         │
│  [Book a discovery call] [Send an inquiry]                   │
├──────────────────────────────────────────────────────────────┤
│  FOOTER                                                      │
└──────────────────────────────────────────────────────────────┘
```

---

## 4. Full page copy

The live source of truth for copy is the React files under `app/`. The version below is preserved for reference and content-ops.

### Homepage

- **Hero H1.** Sharper accounts. Better pipeline. Fewer wasted cycles.
- **Hero sub.** Signal Forge helps industrial and technical B2B companies find the right target accounts, qualify the best opportunities, and move into new European markets with conviction — without the noise of a generic lead-gen agency.
- **Primary CTA.** Book a discovery call · 30-minute call · No pitch deck · No obligation.
- **Value prop.** Commercial clarity, not more activity. Most industrial sales teams are not short on activity — they're short on signal. Signal Forge sits between strategy and execution.
- **Problems solved (6).** Vague ICP / wrong accounts in pipeline / new market, no map / noisy inbound / founder-led sales doesn't scale / sector shift, unclear positioning.
- **Services teaser (3).** Market Mapping Sprint · Lead Qualification Retainer · Commercial Intelligence / Market Entry.
- **Who it's for.** Industrial SMEs · Export manufacturers · Technical product companies · Defense-adjacent suppliers · Founders entering new geography · Sales-led teams needing cleaner pipeline.
- **Why.** Industrial fluency · Analytical, not anecdotal · Commercial judgment · Single point of contact · Tight scope · Discretion by default.
- **Process.** Discovery → Market mapping → Qualification → Delivery & next steps.
- **FAQ teaser.** Agency difference · Outreach execution · Industries.
- **Closing CTA.** Quieter pipeline. Sharper accounts.

### About

- **H1.** Built by someone who has actually sold into industrial markets.
- **Founder story.** Career on the commercial side of industrial businesses — sales, BD, market analysis. The companies that grew cleanly had the clearest read on their market. Signal Forge makes that clarity available to industrial SMEs and technical companies that don't want — or need — an agency.
- **Background blocks.** Sales & BD · Industrial sectors (steel, defense, components) · Market analysis · Macro & investing thinking · B2B communication.
- **Philosophy.** Better decisions, not more decks. Most commercial mistakes are made before the first call. The work here is upstream of execution. Bias toward concrete output.
- **How I work.** Small client list · Senior operator on every engagement · NDAs default · Fixed scopes · Written briefs · No drip funnels.

### Services

For each: format, intro, who it's for, deliverables, outcomes, CTA.

**01 — Market Mapping Sprint** · Fixed scope, 2–4 weeks. Sharp ICP, ranked account universe, competitive picture.
**02 — Lead Qualification Retainer** · Monthly, ongoing. Upstream filter on pipeline; tiered weekly triage; monthly pattern review.
**03 — Commercial Intelligence / Market Entry** · Project, 4–8 weeks. For new European markets, new verticals, strategic pivots. Includes market sizing, route to market, regulatory/procurement context, initial target list.

Plus a one-page service summary request CTA.

### FAQ

Ten Q&A, expanded copy in `app/faq/page.tsx`:
1. How is this different from an agency?
2. Which industries do you work with?
3. Do you provide outreach execution?
4. How fast can we start?
5. Do you work on retainers or projects?
6. Is this suitable for small companies?
7. Can you support market entry in Europe?
8. What kind of results should clients expect?
9. How do you handle confidentiality?
10. How is the work priced?

### Contact

- **H1.** Start with a 30-minute call — or a short note.
- **Sub.** Either route works. The call is faster if you have a specific commercial question. The form is fine if you'd prefer to scope it in writing first.
- **Trust block.** Response within one business day · NDA on request · No drip sequence.
- **Email fallback.** Direct line — `hello@signalforge.co`.

---

## 5. CTA copy options

Pick by context. The site currently uses the first option in each row.

| Slot                 | Primary CTA                   | Alternates                                                                  |
|----------------------|-------------------------------|-----------------------------------------------------------------------------|
| Hero, sticky nav     | Book a discovery call         | Start with a 30-minute call · Talk to a senior operator · Scope a sprint    |
| Services page        | Book a discovery call         | Scope this engagement · Talk it through · Request a tailored scope          |
| Closing band (dark)  | Book a discovery call         | Get a senior read on your market · Quiet your pipeline                      |
| Form button          | Send inquiry                  | Send a short note · Start the conversation                                  |
| Secondary            | See services                  | See how I work · See engagements · Read the FAQ                             |
| Asset                | Request the one-pager         | Get the service summary · Download the brief                                |

---

## 6. SEO metadata

Set in each `page.tsx` via Next.js `Metadata`. Canonicals are page-relative; `metadataBase` is set in `app/layout.tsx`.

| Page       | Title                                                          | Description                                                                                                                                                          | H1                                                                  | Slug        |
|------------|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|-------------|
| Home       | Signal Forge — Commercial intelligence for industrial B2B      | Signal Forge helps industrial and technical B2B companies find the right accounts, qualify the best opportunities, and enter new European markets.                   | Sharper accounts. Better pipeline. Fewer wasted cycles.             | `/`         |
| About      | About — Signal Forge                                           | Signal Forge is a one-person commercial intelligence practice for industrial B2B. Background in sales, BD, steel, defense, and macro-aware market analysis.          | Built by someone who has actually sold into industrial markets.     | `/about`    |
| Services   | Services — Signal Forge                                        | Three engagements for industrial B2B: Market Mapping Sprint, Lead Qualification Retainer, and Commercial Intelligence / Market Entry Support.                        | Three engagements. One job: cleaner commercial signal.              | `/services` |
| FAQ        | FAQ — Signal Forge                                             | Common questions about Signal Forge — how the work differs from an agency, industries served, retainers vs projects, and what results to expect.                     | Honest answers to the questions that actually come up.              | `/faq`      |
| Contact    | Contact — Signal Forge                                         | Book a discovery call with Signal Forge or send an inquiry. One senior operator replies — within one business day.                                                   | Start with a 30-minute call — or a short note.                      | `/contact`  |

**H2 themes per page.**
- Home: What we do · Problems we solve · Services · Who it's for · Why Signal Forge · Process · FAQ · Next step.
- Services: each engagement gets its own H2 (`Market Mapping Sprint`, `Lead Qualification Retainer`, `Commercial Intelligence / Market Entry`).
- About: Founder story · Background · Philosophy · How I work.

**Keyword themes (use naturally, not stuffed).**
- B2B market intelligence · industrial lead generation · industrial B2B sales
- Account research / target account list
- Lead qualification / ICP definition
- Market mapping / market sizing
- European market entry / cross-border B2B
- Commercial strategy / commercial intelligence
- Industrial SME / export manufacturer / defense supplier

**Internal links.**
- Hero → `/contact#book`, `/services`
- Services homepage block → each `/services#<id>`
- About philosophy → `/services`
- FAQ → `/contact#book`
- Footer → all five pages plus three conversion CTAs

**Structured data (recommended next pass).** Add `Organization`, `Service` (for each of three engagements), `FAQPage` for `/faq`, and `BreadcrumbList` per page. JSON-LD goes in `app/layout.tsx` (Org) and individual `page.tsx` files (Service / FAQPage).

---

## 7. Brand style guide

### Colour palette

| Token        | Hex      | Use                                                |
|--------------|----------|----------------------------------------------------|
| `forge`      | #0B0D10  | Primary text, dark CTA band, primary button bg     |
| `steel`      | #1F2937  | Secondary text, body emphasis                      |
| `iron`       | #6B7280  | Supporting copy, captions                          |
| `mist`       | #F4F4F2  | Page background                                    |
| `paper`      | #FFFFFF  | Card / section surfaces                            |
| `hairline`   | #E5E5E1  | 1px dividers, borders                              |
| `ember`      | #C9551F  | Accent — used sparingly (logo dot, bullets, hover) |
| `emberDark`  | #A8431A  | Ember hover state                                  |

**Usage rule.** Ember is a forge spark — never a wallpaper. One or two accents per viewport, max.

### Typography

- **Display & body.** Inter — 400/500/600/700. Tight tracking (`-0.015em` / `-0.03em`) on display.
- **Eyebrows & numerals.** JetBrains Mono — 11px, uppercase, `letter-spacing: 0.18em`.
- **Scale.** 11 (mono eyebrow) · 14 (small) · 15 (form body) · 17–18 (body) · 24–32 (H3) · 36–48 (H2) · 48–72 (H1).
- **Line height.** Display `1.05`; body `1.5`.

### Buttons

- **Primary.** Solid `forge` background, `mist` text, square corners, ember on hover. Used for conversion actions.
- **Secondary.** Outline only, fills to `forge` on hover. Used for navigation between sections.
- **Ghost.** Underline-on-hover text link. Used for "read more" navigation.
- **Inverse primary** (on dark band). Ember background, mist text.

### Spacing system

8-point base. Section vertical padding: `py-20` (80px) mobile → `py-28` (112px) desktop. Grid is `max-w-6xl` (1152px) with `px-6 / md:px-10`. Generous whitespace between sections; hairline dividers do the structural work.

### Cards

- 1px `hairline` border on `paper`.
- `p-7` (28px) internal padding.
- Hover: border darkens to `forge`. No drop shadow by default.
- Optional shadow token `shadow-card` for elevated variants.

### Icons & marks

- No decorative icon set. Visual hierarchy comes from numbers (`01 / EYEBROW`), monospaced labels, and hairlines.
- A 2px square ember dot is the only repeating glyph — used in bullets and the logo.
- Logo is a square frame + sharp ascending line + a single ember spark.

### Imagery direction

- Black-and-white industrial photography: ports, steel coils, machine halls, control rooms, cargo.
- High contrast, no clichéd "shaking hands" or stock office stills.
- If photography is unavailable, lean on whitespace, hairline-ruled tables, and mono labels.
- Avoid AI-collage imagery; it undermines the credibility this brand depends on.

### Mood

Industrial broadsheet meets boutique advisory. Closer in feel to a defence-sector quarterly or a commodities research note than a SaaS landing page. Restraint is the brand.

---

## 8. Implementation / code structure

### Tech stack

- **Next.js 14** (App Router) — file-based routing, built-in metadata, sitemap & robots, image optimisation, edge-ready.
- **React 18** + **TypeScript** — typed components, easy to scale.
- **Tailwind CSS 3.4** — design tokens centralised in `tailwind.config.ts`; utility-only styling.
- **Inter + JetBrains Mono** — loaded from Google Fonts with `preconnect`.
- **No CMS** at launch — copy lives in the page files. Easy to wire Sanity / Contentlayer later if cadence increases.
- **No analytics / cookie banner shipped** — add Plausible or Fathom (cookieless) when ready.

### Deployment

- Push the branch → connect repo to **Vercel** → deploy. Zero config.
- Set env vars when wiring form delivery (Resend / Postmark) and the booking link.
- Custom domain: point `signalforge.co` to Vercel, set `metadataBase` accordingly.

### File tree

```
app/
  layout.tsx              Root layout, fonts, global SEO defaults
  globals.css             Tailwind layers + brand utilities
  page.tsx                Homepage
  about/page.tsx          About
  services/page.tsx       Services (3 anchored sections)
  faq/page.tsx            FAQ (10 entries)
  contact/page.tsx        Contact + form + booking
  not-found.tsx           404
  sitemap.ts              Generated sitemap
  robots.ts               Generated robots
  api/contact/route.ts    POST handler for the inquiry form
components/
  Nav.tsx                 Sticky responsive nav + mobile drawer
  Footer.tsx              Multi-column footer
  Eyebrow.tsx             Mono eyebrow with optional numeral
  CTASection.tsx          Reusable dark CTA band
  ContactForm.tsx         Client-side form with status states
lib/
  site.ts                 Site config (name, URLs, nav, email)
tailwind.config.ts        Design tokens
postcss.config.mjs
next.config.mjs
tsconfig.json
package.json
```

### Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

### Wiring the contact form to real delivery

`app/api/contact/route.ts` currently validates and logs. To send mail, swap the body for a provider call. Example with **Resend**:

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Signal Forge <forms@signalforge.co>",
  to: "hello@signalforge.co",
  reply_to: body.email,
  subject: `Inquiry — ${body.company}`,
  text: JSON.stringify(body, null, 2),
});
```

### One-page vs multi-page

The site ships as a multi-page build. A one-page variant is trivial: every section already lives as a self-contained block in `app/page.tsx`. To collapse to one page, fold the About, Services, FAQ, and Contact content into the homepage as additional sections with `id`s, then point the nav to in-page anchors (`/#services`, `/#about`, etc.).

---

## 9. Optional improvements & alternatives

Sequenced by effort vs. impact.

1. **JSON-LD structured data** — `Organization`, three `Service` entries, `FAQPage`. Low effort, real SEO upside.
2. **Real booking integration** — Cal.com or Savvycal embedded on `/contact`, replacing the external link.
3. **Email delivery on the form** — wire Resend / Postmark and add a hidden honeypot + simple rate-limit on the API route.
4. **One-pager PDF** — generate from the Services page content with `@react-pdf/renderer`, gated behind email capture (and wired into your newsletter list).
5. **Newsletter / updates list** — single field opt-in in the footer (ConvertKit, Buttondown, or Loops). Adds the secondary goal without adding noise.
6. **Case studies / proof bar** — once two or three engagements are referenceable, add `/work/<slug>` pages with a single-result blurb each. Restrained, not testimonial-heavy.
7. **CMS migration** — if you start publishing notes / research, move copy into Sanity or Contentlayer so writing doesn't require code edits.
8. **OG image generation** — `@vercel/og` for branded social previews per page.
9. **Light analytics** — Plausible or Fathom, cookieless, no banner required.
10. **Sector-specific landing pages** — `/industries/steel`, `/industries/defense`, `/markets/germany` — once paid traffic or specific niches justify the depth.

---

## 10. Notes on copy intent

The copy was written to read like a senior commercial operator, not a marketer. Concrete claims (e.g. "ranked account universe", "monthly pattern review") are deliberately preferred over abstractions ("growth", "scale"). Disclaimers — "if the work doesn't fit, I'll say so" — are load-bearing for trust at this price point. Keep them.
