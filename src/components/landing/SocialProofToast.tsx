import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const PEOPLE = [
  { name: "Maria", city: "São Paulo" },
  { name: "Ana", city: "Rio de Janeiro" },
  { name: "Juliana", city: "Belo Horizonte" },
  { name: "Fernanda", city: "Curitiba" },
  { name: "Camila", city: "Brasília" },
  { name: "Patrícia", city: "Salvador" },
  { name: "Larissa", city: "Fortaleza" },
  { name: "Beatriz", city: "Porto Alegre" },
  { name: "Carolina", city: "Recife" },
  { name: "Amanda", city: "Goiânia" },
];

export function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [person, setPerson] = useState(PEOPLE[0]!);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let showTimeout: ReturnType<typeof setTimeout>;
    let hideTimeout: ReturnType<typeof setTimeout>;
    let cycleTimeout: ReturnType<typeof setTimeout>;

    const show = () => {
      const randomPerson = PEOPLE[Math.floor(Math.random() * PEOPLE.length)]!;
      setPerson(randomPerson);
      setExiting(false);
      setVisible(true);

      hideTimeout = setTimeout(() => {
        setExiting(true);
        setTimeout(() => {
          setVisible(false);
          setExiting(false);
          // Schedule next
          cycleTimeout = setTimeout(show, 15000 + Math.random() * 10000);
        }, 400);
      }, 4000);
    };

    // First toast after 12 seconds
    showTimeout = setTimeout(show, 12000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearTimeout(cycleTimeout);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-20 left-4 z-50 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-soft sm:bottom-6 ${
        exiting ? "toast-exit" : "toast-enter"
      }`}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-grad-brand font-display text-sm font-extrabold text-primary-foreground">
        {person.name.charAt(0)}
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-foreground">
          {person.name} de {person.city}
        </p>
        <p className="text-xs font-semibold text-muted-foreground">
          acabou de acessar o Mata Vontade
        </p>
      </div>
    </div>
  );
}
