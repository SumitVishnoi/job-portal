"use client";

import { useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const buttonRefs = useRef([]);
  const baseId = useId();

  const handleKeyDown = (event, index) => {
    const total = items.length;
    const key = event.key;

    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(key)) {
      return;
    }

    event.preventDefault();

    let nextIndex = index;

    if (key === "ArrowDown") {
      nextIndex = (index + 1) % total;
    }

    if (key === "ArrowUp") {
      nextIndex = (index - 1 + total) % total;
    }

    if (key === "Home") {
      nextIndex = 0;
    }

    if (key === "End") {
      nextIndex = total - 1;
    }

    setOpenIndex(nextIndex);
    buttonRefs.current[nextIndex]?.focus();
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(18,35,63,0.04)]"
          >
            <h3>
              <button
                ref={(element) => {
                  buttonRefs.current[index] = element;
                }}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--color-body)] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen ? (
              <div
                id={panelId}
                className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-[var(--color-body)]"
                role="region"
              >
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
