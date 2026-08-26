import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const WORDS = ["pizza", "hambúrguer", "chocolate", "salgado", "doce", "lanche"];
const INTERVAL = 2500;

export function TextMorph({ className = "" }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % WORDS.length);
        setFading(false);
      }, 300);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      className={`inline-block transition-all duration-300 ease-out ${
        fading ? "opacity-0 blur-[2px] translate-y-1" : "opacity-100 blur-0 translate-y-0"
      } ${className}`}
    >
      {WORDS[index]}
    </span>
  );
}
