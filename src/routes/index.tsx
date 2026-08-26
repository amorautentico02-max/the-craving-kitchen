import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { Hero } from "@/components/landing/Hero";
import { CravingCategories } from "@/components/landing/CravingCategories";
import { Identification } from "@/components/landing/Identification";
import { FoodGallery } from "@/components/landing/FoodGallery";
import { ChocolateSection } from "@/components/landing/ChocolateSection";
import { ProductShowcase } from "@/components/landing/ProductShowcase";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { BonusStack } from "@/components/landing/BonusStack";
import { Pricing } from "@/components/landing/Pricing";
import { ProUpgrade } from "@/components/landing/ProUpgrade";
import { Testimonials } from "@/components/landing/Testimonials";
import { Guarantee } from "@/components/landing/Guarantee";
import { Faq } from "@/components/landing/Faq";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
import { SocialProofToast } from "@/components/landing/SocialProofToast";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mata Vontade — 120+ Receitas Doces e Salgadas" },
      {
        name: "description",
        content:
          "Mate a vontade de pizza, hambúrguer, salgado e doce com mais de 120 receitas práticas. Acesso imediato, 3 bônus e 14 dias de garantia.",
      },
      {
        property: "og:title",
        content: "Mata Vontade — 120+ Receitas Doces e Salgadas",
      },
      {
        property: "og:description",
        content:
          "Receitas para matar a vontade de pizza, hambúrguer, chocolate e salgado — sem viver de comida sem graça.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-cream">
      <ScrollProgress />
      <AnnouncementBar />
      <Hero />
      <CravingCategories />
      <Identification />
      <FoodGallery />
      <ChocolateSection />
      <ProductShowcase />
      <HowItWorks />
      <BonusStack />
      <Pricing />
      <ProUpgrade />
      <Testimonials />
      <Guarantee />
      <Faq />
      <FinalCTA />
      <StickyMobileCTA />
      <SocialProofToast />
    </main>
  );
}
