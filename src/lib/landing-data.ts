// ============================================================
// MATA VONTADE — dados editáveis da landing page
// Edite textos, preços, receitas, bônus e depoimentos aqui.
// ============================================================

import heroPizza from "@/assets/hero-pizza.png";
import heroBurger from "@/assets/hero-burger.png";
import heroBrownie from "@/assets/hero-brownie.png";
import heroCookie from "@/assets/hero-cookie.png";
import galleryPizza from "@/assets/gallery-pizza.jpg";
import gallerySmash from "@/assets/gallery-smash.jpg";
import galleryNuggets from "@/assets/gallery-nuggets.jpg";
import galleryCoxinha from "@/assets/gallery-coxinha.jpg";
import galleryPastel from "@/assets/gallery-pastel.jpg";
import galleryBrownie from "@/assets/gallery-brownie.jpg";
import galleryCookie from "@/assets/gallery-cookie.jpg";
import galleryBrigadeiro from "@/assets/gallery-brigadeiro.jpg";
import galleryCheesecake from "@/assets/gallery-cheesecake.jpg";
import galleryBatata from "@/assets/gallery-batata.jpg";
import galleryWrap from "@/assets/gallery-wrap.jpg";
import gallerySorvete from "@/assets/gallery-sorvete.jpg";
import chocMousse from "@/assets/choc-mousse.jpg";
import chocBolo from "@/assets/choc-bolo.jpg";
import chocBombom from "@/assets/choc-bombom.jpg";

export const HERO_IMAGES = {
  pizza: heroPizza,
  burger: heroBurger,
  brownie: heroBrownie,
  cookie: heroCookie,
};

// ---------- Oferta ----------
export const PRICE = {
  old: "47,00",
  current: "7,90",
  currency: "R$",
  ctaUrl: "#oferta", // troque pelo link de checkout quando publicar
};

export const PRO = {
  old: "97,00",
  price: "19,90",
};

// ---------- Categorias de vontade ----------
export const CATEGORIES = [
  {
    emoji: "🍕",
    title: "Vontade de Pizza",
    description: "Frigideira, massa rápida, low carb e mini pizzas.",
    count: "15+ receitas",
    image: galleryPizza,
  },
  {
    emoji: "🍔",
    title: "Hambúrguer & Fast Food",
    description: "Smash, nuggets, batata crocante e molhos especiais.",
    count: "20+ receitas",
    image: gallerySmash,
  },
  {
    emoji: "🍫",
    title: "Vontade de Chocolate",
    description: "Brownie, brigadeiro, mousse e bolo de caneca.",
    count: "20+ receitas",
    image: galleryBrownie,
  },
  {
    emoji: "🥟",
    title: "Vontade de Salgado",
    description: "Coxinha, pastel de airfryer, esfiha e empadão.",
    count: "20+ receitas",
    image: galleryCoxinha,
  },
  {
    emoji: "🍰",
    title: "Vontade de Doce",
    description: "Cheesecake, sorvete, cookie e sobremesas de colher.",
    count: "15+ receitas",
    image: galleryCheesecake,
  },
  {
    emoji: "🌯",
    title: "Vontade de Lanche",
    description: "Wraps, sanduíches quentes e lanches de 10 minutos.",
    count: "15+ receitas",
    image: galleryWrap,
  },
];

// ---------- Galeria ----------
export const GALLERY = [
  { name: "Pizza de Frigideira", tag: "10 MIN", image: galleryPizza },
  { name: "Smash Caseiro", tag: "PROTEICO", image: gallerySmash },
  { name: "Brownie Cremoso", tag: "SEM AÇÚCAR ADICIONADO", image: galleryBrownie },
  { name: "Nuggets Crocantes", tag: "AIRFRYER", image: galleryNuggets },
  { name: "Coxinha Prática", tag: "CONGELÁVEL", image: galleryCoxinha },
  { name: "Cookie com Chocolate", tag: "ATÉ 5 INGREDIENTES", image: galleryCookie },
  { name: "Pastel na Airfryer", tag: "AIRFRYER", image: galleryPastel },
  { name: "Cheesecake", tag: "SEM AÇÚCAR ADICIONADO", image: galleryCheesecake },
  { name: "Brigadeiro de Colher", tag: "10 MIN", image: galleryBrigadeiro },
  { name: "Batata Crocante", tag: "ATÉ 5 INGREDIENTES", image: galleryBatata },
  { name: "Wrap Recheado", tag: "PROTEICO", image: galleryWrap },
  { name: "Sorvete Caseiro", tag: "CONGELÁVEL", image: gallerySorvete },
];

// ---------- Seção de chocolate ----------
export const CHOCOLATE_ITEMS = [
  { name: "Brownie cremoso", image: galleryBrownie },
  { name: "Cookie recheado", image: galleryCookie },
  { name: "Brigadeiro de colher", image: galleryBrigadeiro },
  { name: "Mousse de chocolate", image: chocMousse },
  { name: "Bolo com ganache", image: chocBolo },
  { name: "Bombom caseiro", image: chocBombom },
];

// ---------- Material principal ----------
export const PRODUCT_CATEGORIES = [
  "15+ Pizzas",
  "20+ Fast Foods",
  "20+ Salgados",
  "20+ Chocolates",
  "15+ Sobremesas",
  "15+ Lanches",
  "15+ Receitas rápidas para a noite",
];

// ---------- Como funciona ----------
export const STEPS = [
  {
    number: "1",
    title: "ESCOLHA A VONTADE",
    description: "Doce, salgado, pizza, chocolate ou lanche.",
  },
  {
    number: "2",
    title: "VEJA AS OPÇÕES",
    description: "Escolha entre receitas rápidas ou mais completas.",
  },
  {
    number: "3",
    title: "PREPARE E APROVEITE",
    description: "Sem depender do delivery toda vez que a vontade aparecer.",
  },
];

// ---------- Bônus ----------
export const BONUSES = [
  {
    number: "01",
    title: "Molhos Mata Vontade",
    description: "Molhos para hambúrguer, sanduíches, saladas, petiscos e lanches.",
    value: "R$ 27,00",
  },
  {
    number: "02",
    title: "Doces de Emergência",
    description: "Receitas rápidas para quando aquela vontade de doce aparecer.",
    value: "R$ 19,00",
  },
  {
    number: "03",
    title: "SOS Fim de Semana",
    description: "Receitas para sexta à noite, filme, sábado, visitas e domingo.",
    value: "R$ 19,00",
  },
];

// ---------- Depoimentos ----------
export const TESTIMONIALS = [
  {
    name: "Camila R.",
    meta: "WhatsApp • ontem",
    text: "Ontem bateu vontade de pizza e fiz a receita de frigideira. Nem pedi delivery. 🤯",
  },
  {
    name: "Fernanda L.",
    meta: "Instagram • há 2 dias",
    text: "Meu problema sempre foi doce depois do jantar. Agora já sei exatamente o que fazer.",
  },
  {
    name: "Juliana M.",
    meta: "WhatsApp • essa semana",
    text: "Meu marido nem acreditou quando viu que eu tinha tirado a receita de um material fit 😂",
  },
  {
    name: "Patrícia S.",
    meta: "Instagram • há 5 dias",
    text: "Fiz o brownie de caneca em 3 minutos. Chorei. É exatamente disso que eu precisava.",
  },
];

// ---------- FAQ ----------
export const FAQ_ITEMS = [
  {
    question: "O material é digital?",
    answer:
      "Sim. O Mata Vontade é 100% digital. Você recebe o acesso imediatamente após a compra e pode ver no celular, tablet ou computador — e imprimir se quiser.",
  },
  {
    question: "Como recebo as receitas?",
    answer:
      "Assim que o pagamento é confirmado, você recebe um e-mail com o link de acesso ao material completo, já com todos os bônus liberados.",
  },
  {
    question: "Preciso saber cozinhar?",
    answer:
      "Não. As receitas foram escritas passo a passo, com ingredientes simples e tempo de preparo indicado. Se você sabe ligar o fogão, consegue fazer.",
  },
  {
    question: "Os ingredientes são difíceis?",
    answer:
      "Não. A maioria das receitas usa ingredientes que você encontra em qualquer supermercado — e muitas usam até 5 ingredientes.",
  },
  {
    question: "Existem receitas doces e salgadas?",
    answer:
      "Sim. São mais de 120 receitas divididas entre pizzas, fast food, salgados, chocolates, sobremesas e lanches.",
  },
  {
    question: "Tem receitas de Airfryer?",
    answer:
      "Tem. Várias receitas foram adaptadas para Airfryer, incluindo pastel, nuggets, batata crocante e salgados congeláveis.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer:
      "O acesso é vitalício. Você paga uma única vez e o material fica disponível para sempre.",
  },
  {
    question: "Recebo atualizações?",
    answer:
      "Sim. Sempre que novas receitas entrarem no material, você recebe a atualização sem custo adicional.",
  },
];

// ---------- Checklist da oferta ----------
export const OFFER_CHECKLIST = [
  "+120 receitas",
  "Material Mata Vontade",
  "3 bônus liberados hoje",
  "Acesso imediato",
  "Atualizações incluídas",
  "14 dias de garantia",
];
