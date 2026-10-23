import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, MapPin, Search, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f4f3]">
      <div className="absolute inset-0 -z-10 opacity-80 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.05),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.04),transparent_25%)]" />
      <div className="absolute left-[-8rem] top-20 -z-10 h-64 w-64 rounded-full bg-[#d8d2ce]/60 blur-3xl" />
      <div className="absolute bottom-[-5rem] right-[-4rem] -z-10 h-72 w-72 rounded-full bg-[#efe8e3] blur-3xl" />

      <div className="mx-auto max-w-7xl px-3 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-4 lg:px-8 lg:pb-16 lg:pt-8">
        <div className="rounded-3xl border border-[#ece9e5] bg-[#f9f8f7] p-3 shadow-[0_18px_70px_rgba(20,20,20,0.04)] sm:rounded-4xl sm:p-4 md:p-6 lg:p-8">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex min-w-0 flex-col justify-center pb-2">

              <h1 className="mt-4 max-w-[560px] text-[clamp(2.7rem,10vw,4.7rem)] font-black leading-[0.96] tracking-[-0.08em] text-[#151515] sm:mt-6 lg:text-[6.1rem]">
                Get Hired Faster
                <span className="block">and Smarter</span>
              </h1>

              <p className="mt-5 max-w-[450px] text-base leading-7 text-[#4a4a4a] sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
                Browse, search and apply for jobs easily—without the noise.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/jobs"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2a2a2a]"
                >
                  Find a job
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>

                <Link
                  href="/employers"
                  className="inline-flex items-center rounded-full border border-[#d8d3cf] bg-white px-6 py-3 text-base font-semibold text-[#171717] transition duration-300 hover:-translate-y-0.5 hover:border-[#c9c3be] hover:bg-[#f7f4f3]"
                >
                  Hire talent
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-[#3e3e3e] sm:mt-8 sm:gap-3 sm:text-sm">
                {[
                  { icon: MapPin, label: "Remote-ready roles" },
                  { icon: BriefcaseBusiness, label: "Verified employers" },
                  { icon: Search, label: "Smart matches" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex w-full md:w-fit items-center gap-2 rounded-full border border-[#e7e1dd] bg-white/80 px-3 py-2 shadow-[0_10px_25px_rgba(17,17,17,0.03)]"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2eee9]">
                      <Icon className="h-4 w-4 text-[#171717]" aria-hidden="true" />
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex min-h-[500px] w-full max-w-[560px] items-end justify-center pt-8 sm:min-h-[560px] sm:pt-10 lg:min-h-[620px]">
              <div className="absolute left-4 top-12 hidden h-14 w-14 items-center justify-center rounded-full border border-[#e2dfdb] bg-white shadow-[0_10px_30px_rgba(17,17,17,0.06)] md:flex transition duration-700 hover:-translate-y-1">
                <Sparkles className="h-6 w-6 text-[#171717]" aria-hidden="true" />
              </div>

              <div className="absolute right-10 top-20 hidden h-16 w-16 items-center justify-center rounded-full border border-[#e2dfdb] bg-white shadow-[0_12px_28px_rgba(17,17,17,0.08)] md:flex transition duration-700 hover:-translate-y-1">
                <div className="h-8 w-8 rounded-full bg-[conic-gradient(#4c8bff_0deg,#e84d3d_90deg,#f5c558_180deg,#4ca96d_270deg,#4c8bff_360deg)]" />
              </div>

              <div className="absolute left-1 top-16 z-30 hidden rounded-2xl border border-[#e9e1dc] bg-white/85 px-3 py-2 shadow-[0_20px_40px_rgba(17,17,17,0.08)] backdrop-blur-sm transition duration-700 hover:-translate-y-1 sm:left-2 sm:top-20 sm:flex sm:px-4 sm:py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3efe8]">
                    <Search className="h-4 w-4 text-[#171717]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">Match score</div>
                    <div className="text-lg font-black tracking-[-0.06em] text-[#171717]">92%</div>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 bottom-24 z-30 hidden rounded-2xl border border-[#e9e1dc] bg-white/90 px-3 py-2 shadow-[0_20px_40px_rgba(17,17,17,0.08)] backdrop-blur-sm transition duration-700 hover:-translate-y-1 sm:right-0 sm:bottom-28 sm:flex sm:px-4 sm:py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3efe8]">
                    <BriefcaseBusiness className="h-4 w-4 text-[#171717]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#7a7a7a]">New roles</div>
                    <div className="text-lg font-black tracking-[-0.06em] text-[#171717]">3.2k</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex h-[420px] w-full max-w-[420px] items-end justify-center rounded-[200px_200px_0_0] bg-gradient-to-b from-[#f6f1ee] via-[#ede5df] to-[#dfe2de] shadow-[0_26px_60px_rgba(17,17,17,0.08)] transition duration-500 hover:-translate-y-1 sm:h-[480px] sm:rounded-[220px_220px_0_0] lg:h-[530px]">
                <div className="absolute inset-0 rounded-[200px_200px_0_0] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),transparent_60%)] sm:rounded-[220px_220px_0_0]" />

                <div className="absolute inset-x-0 bottom-0 mx-auto h-full w-full overflow-hidden rounded-t-[200px]">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                    alt="Business professionals collaborating during a hiring discussion"
                    fill
                    className="h-full object-cover object-center"
                    priority
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-4 right-4 z-20 flex items-end justify-between gap-4 border-t border-[#d7d2ce] px-2 pb-4 pt-6">
                <div className="flex-1 text-center">
                  <div className="text-3xl font-black tracking-[-0.08em] text-gray-300 sm:text-[3rem]">50K+</div>
                  <div className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-base lg:text-xl">Active job seekers</div>
                </div>
                <div className="flex-1 text-center">
                  <div className="text-3xl font-black tracking-[-0.08em] text-gray-300 sm:text-[3rem]">20K+</div>
                  <div className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-base lg:text-xl">Verified companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
