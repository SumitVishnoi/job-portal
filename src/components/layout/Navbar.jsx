"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Find jobs", href: "/jobs" },
  { label: "For Employers", href: "/employers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f5f4f3] backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Surhires home page">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#101111] text-white shadow-[0_10px_20px_rgba(16,17,17,0.2)]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-3xl font-black tracking-[-0.06em] text-[#171717]">Surhires</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2 ${
                  isActive ? "text-[#171717]" : "text-[#2e2e2e] hover:text-[#171717]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/jobs"
            className="inline-flex items-center justify-center rounded-full bg-[#1b1b1b] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2a2a2a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
          >
            Sign In
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9d7d2] bg-white text-[#171717] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen ? (
        <div id="mobile-nav" className="border-t border-[#e7e5e1] bg-white md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-xl px-3 py-3 text-base font-medium transition-colors ${
                  pathname === item.href || pathname.startsWith(item.href) ? "bg-[#f1f1ef] text-[#171717]" : "text-[#2e2e2e] hover:bg-[#f8f7f6]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/jobs"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#1b1b1b] px-4 py-3 text-sm font-semibold text-white"
            >
              Sign In
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
