import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-hairline bg-mist">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 bg-ember" />
            <span className="font-medium tracking-tightish">Signal Forge</span>
          </div>
          <p className="mt-4 max-w-prose2 text-sm text-iron">
            Commercial intelligence for industrial B2B companies. Built for
            operators who need cleaner signal — not more noise.
          </p>
          <p className="mt-6 text-sm text-steel">
            <a className="hover:text-ember" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Site</p>
          <ul className="space-y-2 text-sm text-steel">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-forge">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Get started</p>
          <ul className="space-y-2 text-sm text-steel">
            <li>
              <Link href="/contact#book" className="hover:text-forge">
                Book a discovery call
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-forge">
                Send an inquiry
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-forge">
                Download service summary
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-iron md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Signal Forge. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Based in Europe · Serving global industrial clients
          </p>
        </div>
      </div>
    </footer>
  );
}
