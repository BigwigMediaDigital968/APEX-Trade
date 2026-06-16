"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "../FaqsData";

interface FAQsProps {
  title: string;
  description?: string;
  faqs: FAQItem[];
}

export default function FAQs({ title, description, faqs }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-main)] py-14">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[rgba(61,107,255,0.08)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="badge-blue mb-5">SUPPORT CENTER</span>

          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-text-secondary)]">
              {description}
            </p>
          )}
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`glass card-hover overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[rgba(61,107,255,0.35)]"
                    : "border-[var(--color-border-main)]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-white md:text-xl">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-[var(--color-accent-blue-light)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[var(--color-border-main)] px-6 py-5">
                      <p className="leading-relaxed text-[var(--color-text-secondary)]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
