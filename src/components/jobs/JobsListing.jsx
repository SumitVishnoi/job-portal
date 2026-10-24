"use client";

import { useEffect, useRef } from "react";
import {
  ArrowDownWideNarrow,
  BriefcaseBusiness,
  Building2,
  MapPin,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { getActiveFilterCount } from "@/services/jobsService";
import { useJobsListing } from "@/hooks/useJobsListing";

const inputClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-[var(--color-navy)] outline-none transition placeholder:text-slate-400 focus-visible:border-[var(--color-teal)] focus-visible:ring-2 focus-visible:ring-[var(--color-teal)]/20";

function JobCard({ job }) {
  const salary =
    job.salaryMin != null && job.salaryMax != null
      ? `$${Math.round(job.salaryMin / 1000)}k–$${Math.round(job.salaryMax / 1000)}k`
      : job.salary || "Salary not listed";
  const postedLabel =
    job.daysAgo === 0 ? "Posted today" : `Posted ${job.daysAgo} days ago`;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_32px_rgba(18,35,63,0.035)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-teal)]/40 hover:shadow-[0_16px_36px_rgba(18,35,63,0.08)] focus-within:border-[var(--color-teal)]/50 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-sage)] text-[var(--color-teal)]">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[var(--color-navy)]">
              {job.company}
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-[var(--color-body)]">
              <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{job.location}</span>
            </p>
          </div>
        </div>
        <span className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-[var(--color-body)]">
          {job.type}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-semibold leading-snug tracking-[-0.025em] text-[var(--color-navy)]">
          {job.title}
        </h3>
        <p className="mt-2 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-[var(--color-body)]">
          {job.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {[job.arrangement, job.experience].filter(Boolean).map((label) => (
          <span
            key={label}
            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-[var(--color-body)]"
          >
            {label}
          </span>
        ))}
      </div>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Relevant skills">
        {job.skills?.map((skill) => (
          <li
            key={skill}
            className="rounded-lg bg-[var(--color-sage)]/70 px-2.5 py-1 text-xs font-medium text-[var(--color-navy)]"
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <div className="flex flex-wrap items-end justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-[var(--color-body)]">{postedLabel}</p>
            <p className="mt-1 text-sm font-semibold text-[var(--color-teal)]">
              {salary}
            </p>
          </div>
          <details className="group relative">
            <summary className="min-h-10 cursor-pointer list-none rounded-full border border-[var(--color-navy)] px-4 py-2 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-[var(--color-navy)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
              View details
            </summary>
            <div className="absolute bottom-12 right-0 z-10 w-[min(18rem,calc(100vw-3rem))] rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-[var(--color-body)] shadow-xl">
              This is a frontend demo listing. Applications are not sent to
              employers.
            </div>
          </details>
        </div>
      </div>
    </article>
  );
}

function JobCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="min-h-[330px] animate-pulse rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
    >
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-slate-100" />
        <div className="space-y-2">
          <div className="h-3 w-32 rounded bg-slate-100" />
          <div className="h-3 w-24 rounded bg-slate-100" />
        </div>
      </div>
      <div className="mt-6 h-5 w-3/4 rounded bg-slate-100" />
      <div className="mt-4 h-3 w-full rounded bg-slate-100" />
      <div className="mt-2 h-3 w-5/6 rounded bg-slate-100" />
      <div className="mt-5 flex gap-2">
        <div className="h-6 w-20 rounded-full bg-slate-100" />
        <div className="h-6 w-24 rounded-full bg-slate-100" />
      </div>
      <div className="mt-12 h-12 rounded-lg bg-slate-100" />
    </div>
  );
}

function EmptyState({ onClear }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-sage)] text-[var(--color-teal)]">
        <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-[var(--color-navy)]">
        No matching opportunities yet.
      </h3>
      <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-[var(--color-body)]">
        No current demo records match those criteria. Try a different keyword
        or adjust your filters to discover more roles.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
      >
        Clear all filters
      </button>
    </div>
  );
}

export default function JobsListing({ jobs }) {
  const sentinelRef = useRef(null);
  const {
    criteria,
    matchingJobs,
    visibleJobs,
    visibleCount,
    hasMore,
    isLoading,
    updateFilter,
    clearAll,
    loadMore,
  } = useJobsListing(jobs);
  const activeFilterCount = getActiveFilterCount(criteria);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore || isLoading) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) loadMore();
      },
      { rootMargin: "360px 0px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, isLoading, loadMore]);

  return (
    <main className="flex-1 bg-[var(--color-warm-white)]">
      <section className="relative overflow-hidden bg-[var(--color-warm-white)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[var(--color-sage)]/70 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
            Career opportunities
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.055em] text-[var(--color-navy)] sm:text-5xl lg:text-[3.5rem]">
                Find work that moves you forward.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-body)] sm:text-lg">
                Explore opportunities across growing teams, discover roles that
                match your skills, and take the next step in your career.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-body)]">
                <BriefcaseBusiness
                  className="h-4 w-4 text-[var(--color-teal)]"
                  aria-hidden="true"
                />
                {jobs.length} curated demo opportunities
              </p>
            </div>

            <form
              role="search"
              onSubmit={(event) => {
                event.preventDefault();
                updateFilter("query", criteria.query);
              }}
              className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_16px_40px_rgba(18,35,63,0.07)] sm:flex sm:items-center"
            >
              <label htmlFor="job-keyword" className="sr-only">
                Search job titles, companies, locations, or skills
              </label>
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2">
                <Search
                  className="h-5 w-5 shrink-0 text-[var(--color-teal)]"
                  aria-hidden="true"
                />
                <input
                  id="job-keyword"
                  type="search"
                  value={criteria.query}
                  onChange={(event) => updateFilter("query", event.target.value)}
                  placeholder="Title, company, location, or skill"
                  className="min-h-10 min-w-0 flex-1 border-0 bg-transparent text-sm text-[var(--color-navy)] outline-none placeholder:text-slate-400 focus-visible:ring-0"
                />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-navy)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 sm:mt-0 sm:w-auto"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                Search jobs
              </button>
            </form>
          </div>
        </div>
      </section>

        <section
          aria-labelledby="filters-title"
          className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(18,35,63,0.035)] sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <SlidersHorizontal
                  className="h-4 w-4 text-[var(--color-teal)]"
                  aria-hidden="true"
                />
                <h2
                  id="filters-title"
                  className="text-sm font-semibold text-[var(--color-navy)]"
                >
                  Refine your search
                </h2>
                {activeFilterCount > 0 && (
                  <span className="rounded-full bg-[var(--color-sage)] px-2 py-0.5 text-xs font-semibold text-[var(--color-navy)]">
                    {activeFilterCount} active
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={clearAll}
                disabled={activeFilterCount === 0 && criteria.sort === "relevance"}
                className="min-h-10 rounded-lg px-3 text-sm font-semibold text-[var(--color-teal)] transition hover:bg-[var(--color-sage)]/60 disabled:cursor-not-allowed disabled:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)]"
              >
                Clear all
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div>
                <label
                  htmlFor="job-location"
                  className="text-xs font-semibold text-[var(--color-body)]"
                >
                  Location
                </label>
                <div className="relative">
                  <MapPin
                    className="pointer-events-none absolute left-3 top-[1.35rem] h-4 w-4 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="job-location"
                    type="search"
                    value={criteria.location}
                    onChange={(event) =>
                      updateFilter("location", event.target.value)
                    }
                    placeholder="City, region, or remote"
                    className={`${inputClassName} pl-9`}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="job-type"
                  className="text-xs font-semibold text-[var(--color-body)]"
                >
                  Employment type
                </label>
                <select
                  id="job-type"
                  value={criteria.type}
                  onChange={(event) => updateFilter("type", event.target.value)}
                  className={inputClassName}
                >
                  <option value="">All types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="work-arrangement"
                  className="text-xs font-semibold text-[var(--color-body)]"
                >
                  Work arrangement
                </label>
                <select
                  id="work-arrangement"
                  value={criteria.arrangement}
                  onChange={(event) =>
                    updateFilter("arrangement", event.target.value)
                  }
                  className={inputClassName}
                >
                  <option value="">Any arrangement</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="On-site">On-site</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="experience-level"
                  className="text-xs font-semibold text-[var(--color-body)]"
                >
                  Experience level
                </label>
                <select
                  id="experience-level"
                  value={criteria.experience}
                  onChange={(event) =>
                    updateFilter("experience", event.target.value)
                  }
                  className={inputClassName}
                >
                  <option value="">Any experience</option>
                  <option value="Entry-level">Entry-level</option>
                  <option value="Mid-level">Mid-level</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="results-title"
          className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20"
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-sm font-medium text-[var(--color-body)]"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                Showing {visibleCount} of {matchingJobs.length} opportunities
              </p>
              <h2
                id="results-title"
                className="mt-1 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-navy)]"
              >
                Opportunities for you
              </h2>
            </div>
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <ArrowDownWideNarrow
                className="h-4 w-4 shrink-0 text-[var(--color-body)]"
                aria-hidden="true"
              />
              <label
                htmlFor="job-sort"
                className="shrink-0 text-sm font-medium text-[var(--color-body)]"
              >
                Sort by
              </label>
              <select
                id="job-sort"
                value={criteria.sort}
                onChange={(event) => updateFilter("sort", event.target.value)}
                className="min-h-11 min-w-0 rounded-xl border border-slate-200 bg-white px-3 text-sm text-[var(--color-navy)] outline-none focus-visible:border-[var(--color-teal)] focus-visible:ring-2 focus-visible:ring-[var(--color-teal)]/20"
              >
                <option value="relevance">Most relevant</option>
                <option value="newest">Newest first</option>
                <option value="salary-high">Salary: high to low</option>
                <option value="salary-low">Salary: low to high</option>
              </select>
            </div>
          </div>

          {matchingJobs.length === 0 ? (
            <EmptyState onClear={clearAll} />
          ) : (
            <>
              <ul className="grid list-none gap-5 p-0 md:grid-cols-2 xl:grid-cols-3">
                {visibleJobs.map((job) => (
                  <li key={job.id}>
                    <JobCard job={job} />
                  </li>
                ))}
                {isLoading &&
                  Array.from({ length: Math.min(3, matchingJobs.length - visibleCount) }).map(
                    (_, index) => (
                      <li key={`loading-${visibleCount}-${index}`}>
                        <JobCardSkeleton />
                      </li>
                    ),
                  )}
              </ul>

              {hasMore ? (
                <div className="mt-8 flex flex-col items-center gap-3">
                  <div
                    ref={sentinelRef}
                    aria-hidden="true"
                    className="h-px w-full"
                  />
                  <button
                    type="button"
                    onClick={loadMore}
                    disabled={isLoading}
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-[var(--color-navy)] transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] disabled:cursor-wait disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                  >
                    {isLoading ? "Loading more opportunities…" : "Load more jobs"}
                  </button>
                  <p className="sr-only" role="status" aria-live="polite">
                    {isLoading ? "Loading more opportunities" : ""}
                  </p>
                </div>
              ) : (
                <p className="mt-10 text-center text-sm text-[var(--color-body)]">
                  You&apos;ve reached the end of the opportunities.
                </p>
              )}
            </>
          )}
        </section>
    </main>
  );
}
