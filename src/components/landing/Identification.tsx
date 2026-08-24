import { Reveal } from "./motion";

const FLOW = ["Bateu vontade", "Abriu", "Escolheu", "Preparou"];

export function Identification() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-balance sm:text-4xl">
            Comer melhor não deveria significar{" "}
            <span className="hl text-coral">parar de gostar</span> de comida.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed font-semibold text-muted-foreground sm:text-lg">
            O Mata Vontade foi criado para aqueles momentos em que bate vontade
            de pedir um delivery, comer um doce ou preparar um lanche diferente.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed font-semibold text-muted-foreground sm:text-lg">
            Em vez de ficar sem saber o que fazer, você abre o material e
            escolhe uma versão que combina com a sua vontade daquele momento.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <ol className="mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {FLOW.map((step, i) => (
              <li key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="rounded-full bg-grad-brand px-4 py-2 font-display text-sm font-bold text-primary-foreground shadow-card">
                  {step}
                </span>
                {i < FLOW.length - 1 && (
                  <span aria-hidden className="font-display text-lg font-bold text-coral">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
