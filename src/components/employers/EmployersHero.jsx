import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Sparkles,
} from "lucide-react";

export default function EmployersHero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f4f1]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(18,35,63,0.07),transparent_30%)]" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">
              FOR EMPLOYERS
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-black tracking-[-0.07em] text-[var(--color-navy)] sm:text-5xl lg:text-6xl">
              Find the people who move your business forward.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-body)] sm:text-lg">
              Discover skilled professionals, simplify your hiring process, and connect with people who are ready to make an impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#job-form"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-navy)] px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#1d2d4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
              >
                Post a Job
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
              >
                Explore Hiring Plans
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-[var(--color-body)]">
              <CheckCircle2 className="h-4 w-4 text-[var(--color-teal)]" aria-hidden="true" />
              Built for growing teams, ambitious startups, and established businesses.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_60px_rgba(18,35,63,0.08)] sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Hiring pipeline
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[var(--color-navy)]">
                    Roles in review
                  </h2>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-sage)] px-2.5 py-1.5 text-xs font-semibold text-[var(--color-teal)]">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  Demo
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dfeae7] text-[var(--color-teal)]">
                        <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-navy)]">Senior Product Designer</p>
                        <p className="text-xs text-[var(--color-body)]">Northstar Labs</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[0.65rem] font-medium text-[var(--color-body)]">
                      Hybrid
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Figma', 'Research', 'UX'].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-2.5 py-1 text-[0.7rem] font-medium text-[var(--color-body)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Profiles viewed
                    </p>
                    <p className="mt-3 text-3xl font-black tracking-[-0.07em] text-[var(--color-navy)]">
                      482
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Shortlist
                    </p>
                    <p className="mt-3 text-3xl font-black tracking-[-0.07em] text-[var(--color-navy)]">
                      18
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-[var(--color-sage)]/70 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[var(--color-navy)]">Hiring progress</p>
                  <span className="text-sm font-semibold text-[var(--color-teal)]">72%</span>
                </div>
                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/80">
                  <div className="h-full w-[72%] rounded-full bg-[var(--color-teal)]" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 left-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-[0_16px_36px_rgba(18,35,63,0.08)]">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-sage)] text-[var(--color-teal)]">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Candidate match
                  </p>
                  <p className="text-base font-bold text-[var(--color-navy)]">92% fit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
