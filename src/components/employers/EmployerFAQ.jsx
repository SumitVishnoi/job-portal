import FAQAccordion from "@/components/ui/FAQAccordion";
import { employerFaqs } from "@/data/employerFaqs";

export default function EmployerFAQ() {
  return (
    <section className="bg-[var(--color-warm-white)] py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[var(--color-navy)] sm:text-4xl">
            Questions from hiring teams.
          </h2>
        </div>

        <div className="mt-10">
          <FAQAccordion items={employerFaqs} />
        </div>
      </div>
    </section>
  );
}
