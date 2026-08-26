import { PRICE } from "@/lib/landing-data";
import { ChevronDown } from "lucide-react";

export function AnnouncementBar() {
  return (
    <a href={PRICE.ctaUrl} className="sticky top-0 z-40 block bg-grad-brand">
      <p className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center font-display text-[13px] font-bold tracking-wide text-primary-foreground sm:text-sm">
        <span aria-hidden>🎁</span>
        <span>
          BÔNUS HOJE: Molhos Mata Vontade + Doces de Emergência liberados
        </span>
        <ChevronDown className="size-4 animate-bounce" aria-hidden />
      </p>
    </a>
  );
}
