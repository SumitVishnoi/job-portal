import Link from "next/link";
import { BriefcaseBusiness, Globe, Sparkles, Users } from "lucide-react";

const candidateLinks = [
  { label: "Find Jobs", href: "/jobs" },
  { label: "Career Opportunities", href: "/jobs" },
];

const employerLinks = [
  { label: "Hire Talent", href: "/employers" },
  { label: "Post a Job", href: "/employers" },
];

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#about" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Users },
  { label: "Social", href: "https://www.example.com", icon: Globe },
  { label: "Talent", href: "https://www.example.com", icon: BriefcaseBusiness },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="border-t border-slate-200 bg-[var(--color-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-3 text-white" aria-label="Surhires home page">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-xl font-semibold tracking-[-0.04em]">Surhires</span>
          </Link>
          <p className="max-w-sm text-sm leading-7 text-slate-300">
            Surhires helps candidates move with confidence and helps teams discover people ready to do meaningful work.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Candidates</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            {candidateLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Employers</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            {employerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">Company</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-5 text-sm text-slate-300 sm:px-6 lg:flex-row lg:px-8">
          <p>© {currentYear} Surhires. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
