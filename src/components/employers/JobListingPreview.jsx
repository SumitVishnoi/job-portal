export default function JobListingPreview({ preview, onEdit, onReset }) {
  const skillList = preview.skills?.length ? preview.skills : ["Hiring", "Team fit"];

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-[var(--color-warm-white)] p-5 shadow-[0_22px_44px_rgba(18,35,63,0.04)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">
                Preview — not published
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[var(--color-navy)]">
                Submitted role preview
              </h3>
            </div>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-body)]">
              Demo only
            </span>
          </div>

          <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_34px_rgba(18,35,63,0.04)] sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-navy)]">
                {preview.company}
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-[var(--color-body)]">
                {preview.type}
              </span>
            </div>

            <div className="mt-5">
              <h4 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--color-navy)]">
                {preview.title}
              </h4>
              <p className="mt-2 text-sm text-[var(--color-body)]">{preview.location}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                preview.arrangement,
                preview.experience,
                preview.plan,
              ].filter(Boolean).map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[var(--color-sage)] px-2.5 py-1 text-xs font-medium text-[var(--color-navy)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-4 border-t border-slate-200 pt-5 sm:grid-cols-2">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Salary
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-teal)]">
                  {preview.salary}
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Hiring plan
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--color-navy)]">
                  {preview.plan}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Required skills
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-[var(--color-body)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Job description
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-body)]">{preview.description}</p>
            </div>
          </article>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onEdit}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
            >
              Edit details
            </button>
            <button
              type="button"
              onClick={onReset}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--color-navy)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1d2d4a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
            >
              Start over
            </button>
          </div>

          <p className="mt-5 text-sm leading-7 text-[var(--color-body)]">
            This preview is a local frontend demonstration only. No job has been published, saved permanently, or sent to a server.
          </p>
        </div>
      </div>
    </section>
  );
}
