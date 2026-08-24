import { Instagram, MessageCircle } from "lucide-react";
import { TESTIMONIALS } from "@/lib/landing-data";
import { Reveal } from "./motion";

export function Testimonials() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-balance sm:text-4xl">
            Veja o que acontece quando{" "}
            <span className="hl text-coral">bate a vontade</span>.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => {
            const isWhatsapp = t.meta.toLowerCase().includes("whatsapp");
            const Icon = isWhatsapp ? MessageCircle : Instagram;
            return (
              <Reveal key={t.name} delay={(i % 2) * 120}>
                <figure className="card-lift flex h-full flex-col rounded-[28px] bg-cream p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-grad-brand font-display text-lg font-extrabold text-primary-foreground">
                      {t.name.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <figcaption className="truncate font-display text-base font-bold">
                        {t.name}
                      </figcaption>
                      <p className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                        <Icon className="size-3.5" />
                        {t.meta}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-4 rounded-2xl rounded-tl-md bg-card px-4 py-3 text-[15px] leading-snug font-semibold text-foreground shadow-card">
                    “{t.text}”
                  </blockquote>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
