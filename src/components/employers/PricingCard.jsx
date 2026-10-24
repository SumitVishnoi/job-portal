export default function PricingCard({ plan, isSelected, onSelect }) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border p-6 shadow-[0_18px_36px_rgba(18,35,63,0.04)] transition duration-200 ${
        isSelected
          ? "border-[var(--color-teal)] bg-[var(--color-sage)]/60 shadow-[0_20px_40px_rgba(15,118,110,0.1)]"
          : "border-slate-200 bg-white hover:-translate-y-1 hover:border-[var(--color-teal)]/30"
      } ${plan.featured ? "ring-1 ring-[var(--color-teal)]/20" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-semibold text-[var(--color-navy)]">{plan.name}</p>
          <p className="mt-2 text-3xl font-black tracking-[-0.06em] text-[var(--color-navy)]">
            {plan.price}
          </p>
        </div>
        {plan.featured ? (
          <span className="rounded-full bg-[var(--color-teal)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white">
            Most Popular
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-sm leading-7 text-[var(--color-body)]">{plan.description}</p>

      <ul className="mt-6 space-y-3 text-sm text-[var(--color-body)]">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={() => onSelect(plan.id)}
          className={`inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 ${
            isSelected
              ? "bg-[var(--color-navy)] text-white"
              : "border border-slate-200 bg-white text-[var(--color-navy)] hover:bg-slate-50"
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </article>
  );
}
