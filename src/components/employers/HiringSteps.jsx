const steps = [
  {
    number: "01",
    title: "Create Your Job Listing",
    description:
      "Add the role title, responsibilities, required skills, location, and employment type.",
  },
  {
    number: "02",
    title: "Help Candidates Discover the Role",
    description:
      "Present the opportunity in a clear, structured format that helps candidates understand whether it is right for them.",
  },
  {
    number: "03",
    title: "Move Forward with the Right People",
    description:
      "Review interest and continue your hiring process using your preferred tools.",
  },
];

export default function HiringSteps() {
  return (
    <section className="bg-[var(--color-warm-white)] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">
            How hiring works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[var(--color-navy)] sm:text-4xl">
            A simpler path from opening to opportunity.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(18,35,63,0.04)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-sage)] text-sm font-bold text-[var(--color-teal)]">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.04em] text-[var(--color-navy)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-body)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
