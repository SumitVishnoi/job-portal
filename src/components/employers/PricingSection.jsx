import { hiringPlans } from "@/data/hiringPlans";
import PricingCard from "@/components/employers/PricingCard";

export default function PricingSection({ selectedPlan, onSelectPlan }) {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[var(--color-navy)] sm:text-4xl">
            A plan that fits your hiring needs.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-body)]">
            Start with the option that suits your team and scale as your hiring priorities change.
          </p>
          <p className="mt-3 text-sm text-[var(--color-body)]">
            These plan prices are illustrative demo content and not real commercial offers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {hiringPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isSelected={selectedPlan === plan.id}
              onSelect={onSelectPlan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
