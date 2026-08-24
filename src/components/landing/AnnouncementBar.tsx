import { PRICE } from "@/lib/landing-data";

export function AnnouncementBar() {
  return (
    <div className="sticky top-0 z-40 bg-grad-brand">
      <p className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center font-display text-[13px] font-bold tracking-wide text-primary-foreground sm:text-sm">
        <span aria-hidden>🎁</span>
        <span>
          BÔNUS HOJE: Molhos Mata Vontade + Doces de Emergência liberados
        </span>
      </p>
      <a href={PRICE.ctaUrl} className="sr-only">
        Ir para a oferta
      </a>
    </div>
  );
}
