"use client";

import { motion } from "motion/react";

const employerNames = ["Northstar", "Harbor", "Verta", "Summit", "Lattice", "Beacon"];
const logoStyles = [
  "bg-indigo-100 text-indigo-700",
  "bg-cyan-100 text-cyan-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-violet-100 text-violet-700",
  "bg-rose-100 text-rose-700",
];

const stripVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const logoVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function TrustStrip() {
  return (
    <section aria-label="Employer list" className="border-y border-slate-200 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
          Helping ambitious teams find their next great hire
        </p>
        <motion.div
          variants={stripVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {employerNames.map((company, index) => (
            <motion.div
              key={company}
              variants={logoVariants}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="flex h-16 items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-(--color-warm-white) px-4 text-sm font-semibold tracking-[-0.04em] text-slate-700 shadow-sm shadow-slate-900/[0.03]"
            >
              <span
                aria-hidden="true"
                className={`flex size-9 shrink-0 items-center justify-center rounded-xl text-base font-bold tracking-normal ${logoStyles[index]}`}
              >
                {company[0]}
              </span>
              <span>{company}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
