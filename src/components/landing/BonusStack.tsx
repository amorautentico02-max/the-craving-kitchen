import { BONUSES } from "@/lib/landing-data";
import { Reveal } from "./motion";

export function BonusStack() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-balance sm:text-4xl">
            Você ainda recebe{" "}
            <span className="hl text-coral">esses bônus</span>.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {BONUSES.map((bonus, i) => (
            <Reveal key={bonus.number} delay={i * 110}>
              <article className="card-lift flex h-full flex-col rounded-[28px] bg-card p-6 shadow-card">
                <span className="inline-flex w-fit items-center rounded-full bg-grad-brand px-3.5 py-1 font-display text-xs font-extrabold tracking-widest text-primary-foreground">
                  BÔNUS {bonus.number}
                </span>
                <h3 className="mt-4 text-2xl leading-tight font-extrabold">
                  {bonus.title}
                </h3>
                <p className="mt-2 text-sm leading-snug font-semibold text-muted-foreground">
                  {bonus.description}
                </p>
                <p className="mt-auto flex items-center gap-3 pt-5">
                  <span className="text-sm font-bold text-muted-foreground line-through">
                    {bonus.value}
                  </span>
                  <span className="rounded-full bg-leaf px-3 py-1 font-display text-xs font-extrabold tracking-wide text-primary-foreground">
                    GRÁTIS HOJE
                  </span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
