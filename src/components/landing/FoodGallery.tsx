import { GALLERY } from "@/lib/landing-data";
import { Parallax, Reveal } from "./motion";

export function FoodGallery() {
  return (
    <section className="overflow-hidden bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-center font-display text-sm font-bold tracking-[0.2em] text-coral uppercase">
            Galeria de vontades
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-balance sm:text-4xl">
            Sim. Tudo isso pode estar dentro do{" "}
            <span className="text-grad-brand">Mata Vontade</span>.
          </h2>
        </Reveal>

        {/* Layout editorial estilo Pinterest */}
        <Parallax speed={0.02}>
          <div className="mt-10 columns-2 gap-4 lg:columns-3">
            {GALLERY.map((item, i) => (
              <Reveal
                key={item.name}
                delay={(i % 3) * 90}
                className="mb-4 break-inside-avoid"
              >
                <figure className="card-lift group relative overflow-hidden rounded-[24px] shadow-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="img-zoom w-full object-cover"
                  />
                  <span className="absolute top-3 left-3 max-w-[calc(100%-1.5rem)] rounded-xl bg-grad-brand px-2.5 py-1 text-center font-display text-[10px] leading-tight font-bold tracking-wide text-primary-foreground shadow-card">
                    {item.tag}
                  </span>
                  <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-choco/80 px-4 py-2.5 font-display text-sm font-bold text-cream backdrop-blur-sm">
                    {item.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Parallax>
      </div>
    </section>
  );
}
