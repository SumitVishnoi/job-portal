import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes swiper {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none !important;
          }
        }
      `}</style>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">Voices</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[var(--color-navy)] sm:text-4xl">
            Good work starts with the right connection.
          </h2>
        </div>

        {(() => {
          const swiperTestimonials = [...testimonials, ...testimonials, ...testimonials];

          return (
            <div className="mt-12 overflow-hidden py-3">
              <div className="testimonial-track flex w-max gap-6 motion-safe:animate-[swiper_28s_linear_infinite]">
                {swiperTestimonials.map((item, index) => (
                  <article
                    key={`${item.name}-${index}`}
                    style={{
                      animation: "fadeInUp 0.7s ease-out both",
                      animationDelay: `${index * 80}ms`,
                    }}
                    className="group relative w-[280px] shrink-0 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_42px_rgba(18,35,63,0.04)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[var(--color-teal)]/40 hover:shadow-[0_22px_52px_rgba(18,35,63,0.12)] sm:w-[320px]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-teal)] via-[var(--color-sage)] to-[var(--color-navy)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-sage)]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-sage)] text-sm font-semibold text-[var(--color-navy)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                          {item.name
                            .split(" ")
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <span className="rounded-full border border-slate-200 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-slate-500 transition-all duration-300 group-hover:border-[var(--color-teal)] group-hover:text-[var(--color-teal)]">
                          {item.tag}
                        </span>
                      </div>

                      <p className="text-base leading-8 text-[var(--color-body)] transition-colors duration-300 group-hover:text-[var(--color-navy)]">
                        “{item.quote}”
                      </p>

                      <div className="mt-6 border-t border-slate-200 pt-4">
                        <p className="text-base font-semibold text-[var(--color-navy)]">{item.name}</p>
                        <p className="text-sm text-[var(--color-body)]">{item.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })()}
      </section>
    </>
  );
}
