import { BadgeCheck, Check, Flame } from "lucide-react";
import { OFFER_CHECKLIST, PRICE } from "@/lib/landing-data";
import { Reveal } from "./motion";
import { CtaButton } from "./CtaButton";

export function Pricing() {
  return (
    <section id="oferta" className="scroll-mt-16 bg-cream px-5 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-xl">
        {/* Badge de urgência */}
        <div className="mb-6 flex justify-center">
          <span className="badge-pulse inline-flex items-center gap-1.5 rounded-full bg-coral px-4 py-2 font-display text-xs font-extrabold tracking-widest text-primary-foreground uppercase shadow-cta">
            <Flame className="size-4" />
            OFERTA ESPECIAL
          </span>
        </div>

        {/* borda em degradê rotativa */}
        <div className="gradient-border-spin rounded-[34px] p-[3px] shadow-soft">
          <div className="rounded-[31px] bg-card px-6 py-10 text-center sm:px-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-peach px-4 py-1.5 font-display text-xs font-extrabold tracking-widest text-choco uppercase">
              <BadgeCheck className="size-4" />
              Oferta de lançamento
            </span>

            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Comece hoje.
            </h2>

            <p className="mt-6 text-lg font-bold text-muted-foreground">
              De{" "}
              <span className="strike-animated">
                R$ {PRICE.old}
              </span>
            </p>
            <p className="mt-1 font-display text-sm font-extrabold tracking-[0.25em] text-coral uppercase">
              Por apenas
            </p>
            <p className="mt-1 font-display text-7xl leading-none font-extrabold text-grad-brand sm:text-8xl">
              <span className="align-top text-3xl sm:text-4xl">R$</span>
              {PRICE.current}
            </p>

            <ul className="mx-auto mt-8 grid max-w-xs gap-3 text-left">
              {OFFER_CHECKLIST.map((item) => (
                <li key={item} className="flex items-center gap-2.5 font-semibold">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-leaf text-primary-foreground">
                    <Check className="size-3.5" strokeWidth={3.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <CtaButton className="mt-9 w-full sm:w-auto">
              QUERO ACESSAR AGORA
            </CtaButton>
            <p className="mt-4 text-xs font-bold tracking-wide text-muted-foreground uppercase">
              Pagamento único • acesso imediato
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
