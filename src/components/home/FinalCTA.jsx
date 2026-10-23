import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[var(--color-navy)] px-6 py-12 text-white shadow-[0_30px_70px_rgba(18,35,63,0.18)] sm:px-10 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.72)]">Start now</p>
            <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.06em] text-white sm:text-4xl">
              Your next opportunity starts here.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-200">
              Find a role that moves you forward, or discover the talent your team needs to grow.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-sage)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
            >
              Explore Jobs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/employers"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
            >
              Hire Talent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
