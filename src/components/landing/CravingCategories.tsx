import { CATEGORIES } from "@/lib/landing-data";
import { Reveal } from "./motion";

export function CravingCategories() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold text-balance sm:text-4xl">
            Bateu vontade de <span className="text-grad-brand">quê</span> hoje?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-base font-semibold text-muted-foreground">
            Escolha sua vontade e encontre uma receita para aquele momento.
          </p>
        </Reveal>
      </div>

      {/* Mobile: carrossel horizontal com scroll suave / Desktop: grid */}
      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 no-scrollbar sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 lg:px-0 xl:mx-auto xl:max-w-6xl">
        {CATEGORIES.map((cat, i) => (
          <Reveal
            key={cat.title}
            delay={i * 90}
            className="w-[80%] shrink-0 snap-center sm:w-auto sm:shrink"
          >
            <article className="card-lift group h-full overflow-hidden rounded-[28px] bg-cream shadow-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="img-zoom size-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-card/95 px-3 py-1 font-display text-xs font-bold text-foreground shadow-card backdrop-blur">
                  {cat.count}
                </span>
              </div>
              <div className="p-5">
                <h3 className="flex items-center gap-2 text-xl font-extrabold">
                  <span aria-hidden>{cat.emoji}</span>
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug font-semibold text-muted-foreground">
                  {cat.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-2 text-center text-xs font-bold tracking-wide text-muted-foreground uppercase sm:hidden">
        Deslize para ver mais →
      </p>
    </section>
  );
}
