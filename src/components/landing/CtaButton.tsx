import { Check } from "lucide-react";
import { PRICE } from "@/lib/landing-data";

export function CtaButton({
  children,
  href = PRICE.ctaUrl,
  className = "",
  glow = true,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  glow?: boolean;
}) {
  return (
    <a
      href={href}
      className={`btn-cta px-8 py-4 text-base sm:text-lg ${glow ? "animate-cta-glow" : ""} ${className}`}
    >
      {children}
    </a>
  );
}

export function TrustBullets({ light = false }: { light?: boolean }) {
  const items = ["Acesso imediato", "Material digital", "14 dias de garantia"];
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold ${
        light ? "text-cream/85" : "text-muted-foreground"
      }`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-1.5">
          <span className="grid size-5 place-items-center rounded-full bg-leaf text-primary-foreground">
            <Check className="size-3" strokeWidth={3.5} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
