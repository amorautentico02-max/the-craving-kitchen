import { Check, Sparkles } from "lucide-react";
import { PRICE, PRO } from "@/lib/landing-data";
import { Reveal } from "./motion";

const PRO_FEATURES = [
  "Aplicativo Mata Vontade",
  "Aulas em vídeo passo a passo",
  "Cardápios semanais prontos",
  "Receitas extras todo mês",
  "Comunidade VIP",
  "Bônus adicionais exclusivos",
];

export function ProUpgrade() {
  return (
    <section className="bg-choco px-5 py-16 text-cream sm:py-20">
      <Reveal className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-[34px] border border-gold/40 bg-choco-deep p-7 shadow-[0_30px_60px_-25px_oklch(0_0_0/60%)] sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-brand/15 blur-3xl"
          />

          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 font-display text-xs font-extrabold tracking-widest text-choco uppercase">
            <Sparkles className="size-4" />
            Upgrade recomendado
          </span>

          <h2 className="relative mt-5 text-3xl font-extrabold text-cream sm:text-4xl">
            Mata Vontade <span className="text-grad-brand">PRO</span>
          </h2>
          <p className="relative mt-3 max-w-lg text-base font-semibold text-cream/70">
            Para quem quer ir além das receitas: a experiência completa, com
            vídeos, cardápios e novidades todo mês.
          </p>

          <ul className="relative mt-7 grid gap-3 sm:grid-cols-2">
            {PRO_FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 font-semibold text-cream/90">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-grad-brand text-primary-foreground">
                  <Check className="size-3.5" strokeWidth={3.5} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="relative mt-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <p className="text-center sm:text-left">
              <span className="block text-sm font-bold text-cream/60">
                De <span className="line-through">R$ {PRO.old}</span> por
              </span>
              <span className="font-display text-5xl font-extrabold text-cream">
                <span className="align-top text-xl">R$</span>
                {PRO.price}
              </span>
            </p>
            <a
              href={PRICE.ctaUrl}
              className="btn-cta animate-cta-glow px-8 py-4 text-base"
            >
              QUERO O PRO
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
