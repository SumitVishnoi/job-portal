import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EmployerFinalCTA() {
  return (
    <section className="bg-[var(--color-navy)] py-20 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] px-6 py-10 shadow-[0_24px_70px_rgba(18,35,63,0.18)] sm:px-8 lg:px-12">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b8d9d7]">
                Start your next search
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                Your next great hire starts with a clear first step.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-200">
                Define the role, set your priorities, and prepare an opportunity that candidates can understand.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#job-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
              >
                Create a Job Listing
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
              >
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
