"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-mist/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Signal Forge home">
          <Logo />
          <span className="font-medium tracking-tightish text-forge">Signal Forge</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-steel hover:text-forge"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact#book" className="btn-primary">
            Book a discovery call
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block h-px w-6 bg-forge" />
          <span className="mt-1.5 block h-px w-6 bg-forge" />
          <span className="mt-1.5 block h-px w-6 bg-forge" />
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-mist md:hidden">
          <div className="container-x flex flex-col py-4">
            {site.nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm text-steel"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact#book"
              className="btn-primary mt-3"
              onClick={() => setOpen(false)}
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      className="text-forge"
    >
      <rect x="0.5" y="0.5" width="21" height="21" stroke="currentColor" />
      <path
        d="M5 14 L9 6 L13 12 L17 8"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="17" cy="8" r="1.6" fill="#C9551F" />
    </svg>
  );
}
