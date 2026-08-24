import {
  GALLERY,
  HERO_IMAGES,
  PRODUCT_CATEGORIES,
} from "@/lib/landing-data";
import { CountUp, Reveal } from "./motion";
import { CtaButton } from "./CtaButton";

export function ProductShowcase() {
  return (
    <section className="overflow-hidden bg-cream py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        {/* Mockup premium do material */}
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative mx-auto w-fit">
            {/* páginas atrás */}
            <div
              aria-hidden
              className="absolute inset-0 -rotate-6 rounded-[30px] bg-peach shadow-card"
            />
            <div
              aria-hidden
              className="absolute inset-0 rotate-3 rounded-[30px] bg-card shadow-card"
            />
            {/* capa */}
            <div className="relative flex aspect-[3/4] w-64 flex-col overflow-hidden rounded-[30px] bg-grad-brand p-6 text-primary-foreground shadow-soft sm:w-72">
              <span className="font-display text-xs font-bold tracking-[0.25em] uppercase opacity-90">
                Guia completo
              </span>
              <h3 className="mt-2 font-display text-4xl leading-[0.95] font-extrabold">
                MATA
                <br />
                VONTADE
              </h3>
              <img
                src={HERO_IMAGES.pizza}
                alt="Capa do material Mata Vontade com pizza de queijo"
                width={800}
                height={800}
                loading="lazy"
                className="animate-float mx-auto mt-4 w-[85%] drop-shadow-[0_20px_24px_oklch(0_0_0/35%)]"
              />
              <span className="mt-auto inline-flex w-fit items-center rounded-full bg-gold px-4 py-1.5 font-display text-sm font-extrabold text-choco">
                +120 RECEITAS
              </span>
            </div>
          </div>

          {/* páginas internas */}
          <div className="mt-8 flex justify-center gap-4">
            {[GALLERY[0], GALLERY[5]].map((page, i) => (
              <div
                key={page.name}
                className={`card-lift w-36 rounded-3xl bg-card p-2.5 shadow-card ${
                  i === 0 ? "-rotate-3" : "rotate-2"
                }`}
              >
                <img
                  src={page.image}
                  alt={`Página interna: receita de ${page.name}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-square w-full rounded-2xl object-cover"
                />
                <p className="mt-2 px-1 font-display text-xs font-bold">
                  {page.name}
                </p>
                <span className="mt-1 mb-1 ml-1 inline-block rounded-full bg-peach px-2 py-0.5 text-[10px] font-bold text-choco">
                  {page.tag}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Texto */}
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="font-display text-sm font-bold tracking-[0.2em] text-coral uppercase">
              O material
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-balance sm:text-4xl">
              O seu guia para{" "}
              <span className="hl text-coral">cada tipo</span> de vontade.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed font-semibold text-muted-foreground lg:mx-0">
              Mais de 120 receitas organizadas pelo tipo de vontade, para você
              encontrar rapidamente o que preparar quando bater vontade de doce,
              salgado, pizza, lanche ou fast food.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 font-display text-6xl font-extrabold text-grad-brand sm:text-7xl">
              <CountUp to={120} suffix="+" />
            </p>
            <p className="mt-1 font-display text-sm font-bold tracking-widest text-muted-foreground uppercase">
              receitas organizadas por vontade
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li
                  key={cat}
                  className="rounded-full border border-border bg-card px-4 py-2 font-display text-sm font-bold shadow-card"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9">
              <CtaButton>QUERO O MEU GUIA</CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
