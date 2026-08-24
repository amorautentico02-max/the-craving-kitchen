import { HERO_IMAGES, PRICE } from "@/lib/landing-data";
import { Parallax, Reveal } from "./motion";
import { TrustBullets } from "./CtaButton";

export function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden bg-grad-brand">
      {/* camadas de comida flutuando */}
      <Parallax
        speed={0.1}
        className="pointer-events-none absolute -bottom-10 -left-8 w-36 opacity-90 sm:w-48 lg:w-56"
      >
        <img
          src={HERO_IMAGES.burger}
          alt=""
          aria-hidden
          width={800}
          height={800}
          loading="lazy"
          className="animate-float w-full drop-shadow-[0_20px_26px_oklch(0_0_0/30%)]"
        />
      </Parallax>
      <Parallax
        speed={0.14}
        className="pointer-events-none absolute -top-8 -right-6 w-32 opacity-90 sm:w-44 lg:w-52"
      >
        <img
          src={HERO_IMAGES.cookie}
          alt=""
          aria-hidden
          width={800}
          height={800}
          loading="lazy"
          className="animate-float w-full drop-shadow-[0_20px_26px_oklch(0_0_0/30%)]"
          style={{ animationDelay: "1.2s" }}
        />
      </Parallax>

      <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-balance text-primary-foreground sm:text-5xl">
            Da próxima vez que a vontade aparecer, você já vai saber o que
            fazer.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg font-bold text-primary-foreground/90">
            Tenha mais de 120 ideias sempre à mão.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <a
            href={PRICE.ctaUrl}
            className="mt-9 inline-flex items-center justify-center rounded-full bg-card px-10 py-4.5 font-display text-lg font-extrabold text-grad-brand shadow-[0_20px_45px_-15px_oklch(0_0_0/45%)] transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            QUERO O MATA VONTADE
          </a>
          <div className="mt-6">
            <TrustBullets light />
          </div>
        </Reveal>
      </div>

      <footer className="relative border-t border-primary-foreground/20 px-5 py-6 text-center text-xs font-semibold text-primary-foreground/75">
        © 2026 Mata Vontade • Todos os direitos reservados • Termos •
        Privacidade
      </footer>
    </section>
  );
}
