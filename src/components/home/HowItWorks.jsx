import { ArrowRight, BriefcaseBusiness, MessageSquareText, UserRound } from "lucide-react";

const steps = [
  {
    icon: UserRound,
    title: "Create Your Profile",
    description: "Share your experience, skills, and career goals so opportunities can find you.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Discover the Right Match",
    description: "Explore relevant openings or connect with candidates who fit your hiring needs.",
  },
  {
    icon: MessageSquareText,
    title: "Take the Next Step",
    description: "Start meaningful conversations and move closer to your next opportunity.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">How it works</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[var(--color-navy)] sm:text-4xl">
          Better hiring starts with a simpler process.
        </h2>
        <p className="mt-4 text-lg leading-8 text-[var(--color-body)]">
          Whether you&apos;re building your career or growing your team, take the next step with confidence.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <article
            key={title}
            className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(18,35,63,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-teal)]/30 hover:shadow-[0_20px_46px_rgba(15,118,110,0.08)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-sage)] text-[var(--color-teal)]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              <span>0{index + 1}</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-[var(--color-navy)]">{title}</h3>
            <p className="mt-4 flex-1 text-base leading-7 text-[var(--color-body)]">{description}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)]">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
