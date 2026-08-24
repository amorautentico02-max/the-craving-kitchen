import { useEffect, useState } from "react";
import { PRICE } from "@/lib/landing-data";

/**
 * CTA fixo no rodapé (mobile). Aparece depois do hero e some
 * quando a seção de oferta ou o CTA final estão na tela.
 */
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const oferta = document.getElementById("oferta");
    const finalCta = document.getElementById("cta-final");

    let pastHero = false;
    let onOffer = false;
    let onFinal = false;

    const update = () => setVisible(pastHero && !onOffer && !onFinal);

    const heroObs = new IntersectionObserver(
      ([e]) => {
        pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
        update();
      },
      { threshold: 0 },
    );
    const ofertaObs = new IntersectionObserver(
      ([e]) => {
        onOffer = e.isIntersecting;
        update();
      },
      { threshold: 0.1 },
    );
    const finalObs = new IntersectionObserver(
      ([e]) => {
        onFinal = e.isIntersecting;
        update();
      },
      { threshold: 0.05 },
    );

    if (hero) heroObs.observe(hero);
    if (oferta) ofertaObs.observe(oferta);
    if (finalCta) finalObs.observe(finalCta);

    return () => {
      heroObs.disconnect();
      ofertaObs.disconnect();
      finalObs.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-4 transition-transform duration-500 ease-out md:hidden ${
        visible ? "translate-y-0" : "translate-y-[120%]"
      }`}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-full bg-choco py-2.5 pr-2.5 pl-5 shadow-[0_16px_40px_-12px_oklch(0_0_0/55%)]">
        <p className="min-w-0 font-display text-sm leading-tight font-bold text-cream">
          Mata Vontade
          <span className="block text-xs text-gold">
            por R$ {PRICE.current}
          </span>
        </p>
        <a
          href={PRICE.ctaUrl}
          className="btn-cta shrink-0 px-6 py-2.5 text-sm"
        >
          QUERO AGORA
        </a>
      </div>
    </div>
  );
}
