import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/landing-data";
import { Reveal } from "./motion";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-balance sm:text-4xl">
            Perguntas <span className="text-grad-brand">frequentes</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.question} delay={Math.min(i, 3) * 70}>
                <div className="overflow-hidden rounded-[22px] bg-card shadow-card">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6 sm:py-5"
                  >
                    <span className="font-display text-base font-bold sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full bg-grad-brand text-primary-foreground transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="size-4" strokeWidth={3} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[15px] leading-relaxed font-semibold text-muted-foreground sm:px-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
