import { employerBenefits } from "@/data/employerBenefits";

export default function EmployerBenefits() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">
            Why teams choose Surhires
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[var(--color-navy)] sm:text-4xl">
            Everything you need to hire with confidence.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-body)]">
            Spend less time managing the process and more time finding the right people.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {employerBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group rounded-3xl border border-slate-200 bg-[var(--color-warm-white)] p-6 shadow-[0_10px_28px_rgba(18,35,63,0.03)] transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--color-teal)]/30 hover:shadow-[0_18px_32px_rgba(15,118,110,0.08)] focus-within:border-[var(--color-teal)]/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-sage)] text-[var(--color-teal)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.04em] text-[var(--color-navy)]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-body)]">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
