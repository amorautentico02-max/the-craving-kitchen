import { STEPS } from "@/lib/landing-data";
import { Reveal } from "./motion";

export function HowItWorks() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-balance sm:text-4xl">
            Bateu vontade? <span className="text-grad-brand">É simples.</span>
          </h2>
        </Reveal>

        <div className="relative mt-12">
          {/* linha conectando os passos (desktop) */}
          <div
            aria-hidden
            className="absolute top-7 right-[16%] left-[16%] hidden border-t-3 border-dashed border-peach md:block"
          />
          {/* linha vertical (mobile) */}
          <div
            aria-hidden
            className="absolute top-8 bottom-8 left-7 border-l-3 border-dashed border-peach md:hidden"
          />

          <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 140}>
                <li className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
                  <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full bg-grad-brand font-display text-2xl font-extrabold text-primary-foreground shadow-cta">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold tracking-wide">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-xs text-sm leading-snug font-semibold text-muted-foreground md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
