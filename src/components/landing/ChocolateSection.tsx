import { CHOCOLATE_ITEMS } from "@/lib/landing-data";
import { Reveal } from "./motion";
import { CtaButton } from "./CtaButton";

export function ChocolateSection() {
  return (
    <section className="relative overflow-hidden bg-choco py-16 text-cream sm:py-24">
      {/* SVG chocolate drip */}
      <div className="absolute -top-1 left-0 right-0 overflow-hidden" aria-hidden>
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0h1440v20c-120 0-180 30-240 30s-120-30-240-30-180 30-240 30-120-25-240-25-180 25-240 25S120 20 0 20V0z"
            fill="var(--brand-choco)"
          />
        </svg>
      </div>
      {/* brilhos decorativos */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-[-60px] size-56 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-[-60px] size-56 rounded-full bg-gold/15 blur-3xl"
      />
      <span
        aria-hidden
        className="animate-float absolute top-16 left-[8%] size-3 rounded-full bg-gold"
      />
      <span
        aria-hidden
        className="animate-float absolute right-[12%] bottom-24 size-2.5 rounded-full bg-brand"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-balance text-cream sm:text-4xl lg:text-5xl">
            E quando bater aquela vontade de{" "}
            <span className="hl text-brand">chocolate</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-base font-semibold text-cream/70 sm:text-lg">
            Brownie, cookie, brigadeiro, mousse… versões que matam a vontade de
            verdade.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {CHOCOLATE_ITEMS.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 100}>
              <figure className="card-lift group relative overflow-hidden rounded-[24px] shadow-[0_20px_45px_-18px_oklch(0_0_0/55%)]">
                <img
                  src={item.image}
                  alt={item.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="img-zoom aspect-[4/5] w-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-choco-deep/85 via-transparent to-transparent"
                />
                <figcaption className="absolute bottom-3 left-3 font-display text-sm font-bold text-cream sm:text-base">
                  {item.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <CtaButton>QUERO MATAR MINHA VONTADE</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
