import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function JobCard({ job }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(18,35,63,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-teal)]/30 hover:shadow-[0_20px_44px_rgba(15,118,110,0.08)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-navy)]">
          {job.company}
        </div>
        <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[0.65rem] font-medium text-[var(--color-body)]">
          {job.type}
        </span>
      </div>

      <div className="mb-4 space-y-2">
        <h3 className="text-xl font-semibold text-[var(--color-navy)]">{job.title}</h3>
        <div className="flex items-center gap-2 text-sm text-[var(--color-body)]">
          <MapPin className="h-4 w-4 text-[var(--color-teal)]" aria-hidden="true" />
          <span>{job.location}</span>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-200 pt-4">
        <div className="space-y-1">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-slate-500">
            Work type
          </p>
          <p className="text-sm font-medium text-[var(--color-navy)]">{job.arrangement}</p>
        </div>
        <div className="space-y-1 text-right">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-slate-500">
            Salary
          </p>
          <p className="text-sm font-semibold text-[var(--color-teal)]">{job.salary}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full bg-[var(--color-sage)] px-2.5 py-1 text-[0.7rem] font-medium text-[var(--color-navy)]">
          {job.tag}
        </span>
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
        >
          Explore role
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
