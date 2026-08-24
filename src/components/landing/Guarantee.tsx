import { CalendarCheck, Lock, ShieldCheck, Zap } from "lucide-react";
import { Reveal } from "./motion";
import { CtaButton } from "./CtaButton";

const TAGS = [
  { icon: ShieldCheck, label: "COMPRA PROTEGIDA" },
  { icon: Lock, label: "AMBIENTE SEGURO" },
  { icon: Zap, label: "ACESSO IMEDIATO" },
  { icon: CalendarCheck, label: "14 DIAS DE GARANTIA" },
];

export function Guarantee() {
  return (
    <section className="bg-choco py-16 text-cream sm:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <span className="mx-auto grid size-20 place-items-center rounded-full bg-grad-brand shadow-cta">
            <ShieldCheck className="size-10 text-primary-foreground" />
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-balance text-cream sm:text-4xl">
            Você tem <span className="text-brand">14 dias</span> de garantia.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed font-semibold text-cream/70">
            Acesse, teste as receitas e, se não for para você, devolvemos 100%
            do valor. Sem perguntas, sem burocracia.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {TAGS.map((tag) => (
              <li
                key={tag.label}
                className="flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 font-display text-xs font-extrabold tracking-widest text-cream/90"
              >
                <tag.icon className="size-4 text-gold" />
                {tag.label}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <CtaButton glow={false}>QUERO ACESSAR SEM RISCO</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
