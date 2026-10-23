import Link from "next/link";
import { ArrowRight } from "lucide-react";
import JobCard from "@/components/jobs/JobCard";
import { jobs } from "@/data/jobs";

export default function FeaturedJobs() {
  return (
    <section className="bg-[var(--color-sage)]/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">Featured roles</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[var(--color-navy)] sm:text-4xl">
              Opportunities worth exploring
            </h2>
          </div>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-sage)]"
          >
            View all jobs
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-body)]">
          Discover roles across growing teams and in-demand career paths.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.slice(0, 6).map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
