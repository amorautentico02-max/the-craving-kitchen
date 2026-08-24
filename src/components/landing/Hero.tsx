import { HERO_IMAGES } from "@/lib/landing-data";
import { Parallax, Reveal } from "./motion";
import { CtaButton, TrustBullets } from "./CtaButton";

const CRAVINGS = ["Pizza", "Hambúrguer", "Chocolate", "Salgados", "Doces", "Lanches"];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-cream">
      {/* blobs decorativos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-peach/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 size-80 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-16 sm:pt-16 lg:grid-cols-2 lg:gap-6 lg:pt-20 lg:pb-24">
        {/* Texto */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-display text-xs font-bold tracking-widest text-coral uppercase">
              +120 receitas doces e salgadas
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold text-balance sm:text-5xl lg:text-[3.4rem]">
              Mate a vontade de{" "}
              <span className="hl text-coral">pizza</span>,{" "}
              <span className="hl text-coral">hambúrguer</span>,{" "}
              <span className="hl text-coral">salgado</span> e{" "}
              <span className="hl text-coral">doce</span> sem viver de comida
              sem graça.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-md text-lg leading-snug font-semibold text-muted-foreground lg:mx-0">
              Mais de 120 receitas inspiradas nas comidas que você{" "}
              <em className="font-display font-bold text-foreground not-italic">
                realmente
              </em>{" "}
              sente vontade de comer.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              {CRAVINGS.map((c) => (
                <li
                  key={c}
                  className="rounded-full bg-card px-3.5 py-1.5 font-display text-sm font-bold text-foreground shadow-card"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-8 flex flex-col items-center gap-5 lg:items-start">
              <CtaButton className="w-full max-w-sm sm:w-auto">
                QUERO ACESSAR O MATA VONTADE
              </CtaButton>
              <TrustBullets />
            </div>
          </Reveal>
        </div>

        {/* Composição de comidas em camadas */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto h-[350px] w-full max-w-md sm:h-[420px] lg:h-[520px] lg:max-w-none">
            <Parallax
              speed={0.045}
              className="absolute top-0 left-1/2 w-[62%] -translate-x-1/2"
            >
              <img
                src={HERO_IMAGES.pizza}
                alt="Fatia de pizza com queijo derretido puxando"
                width={800}
                height={800}
                fetchPriority="high"
                className="animate-float w-full drop-shadow-[0_28px_36px_oklch(0.3_0.06_40/30%)]"
                style={{ "--float-rot": "-4deg" } as React.CSSProperties}
              />
            </Parallax>

            <Parallax
              speed={0.09}
              className="absolute bottom-[8%] left-0 w-[46%]"
            >
              <img
                src={HERO_IMAGES.burger}
                alt="Hambúrguer smash com cheddar derretendo"
                width={800}
                height={800}
                loading="lazy"
                className="animate-float w-full drop-shadow-[0_24px_30px_oklch(0.3_0.06_40/28%)]"
                style={
                  {
                    "--float-rot": "5deg",
                    animationDelay: "0.8s",
                  } as React.CSSProperties
                }
              />
            </Parallax>

            <Parallax
              speed={0.12}
              className="absolute right-0 bottom-[16%] w-[38%]"
            >
              <img
                src={HERO_IMAGES.brownie}
                alt="Brownie cremoso com chocolate escorrendo"
                width={800}
                height={800}
                loading="lazy"
                className="animate-float w-full drop-shadow-[0_22px_28px_oklch(0.3_0.06_40/28%)]"
                style={
                  {
                    "--float-rot": "-6deg",
                    animationDelay: "1.6s",
                  } as React.CSSProperties
                }
              />
            </Parallax>

            <Parallax
              speed={0.15}
              className="absolute top-[2%] right-[4%] w-[26%]"
            >
              <img
                src={HERO_IMAGES.cookie}
                alt="Cookie com gotas de chocolate derretido"
                width={800}
                height={800}
                loading="lazy"
                className="animate-float w-full drop-shadow-[0_18px_24px_oklch(0.3_0.06_40/25%)]"
                style={
                  {
                    "--float-rot": "8deg",
                    animationDelay: "2.2s",
                  } as React.CSSProperties
                }
              />
            </Parallax>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
