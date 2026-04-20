interface navItems {
  label: string;
  href: string;
}

export const NAV_ITEMS: navItems[] = [
  { label: "Accueil", href: "/" },
  { label: "Programmes", href: "/programmes" },
  { label: "Coachs", href: "/coachs" },
  { label: "Blog", href: "/blog" },
];

interface ProgramItems {
  title: string;
  description: string;
  image: string;
}

export const PROGRAMS: ProgramItems[] = [
  {
    title: "Musculation & Force",
    description:
      "Développe ta masse musculaire, ta force et ta puissance avec des programmes adaptés à tous les niveaux.",
    image: "/programs/musculation.jpg",
  },
  {
    title: "Yoga",
    description:
      "Améliore ta flexibilité, ton équilibre et ton bien-être grâce à des séances de yoga guidées.",
    image: "/programs/yoga.jpg",
  },
  {
    title: "Cardio",
    description:
      "Brûle des calories, améliore ton endurance et booste ton système cardiovasculaire.",
    image: "/programs/cardio.webp",
  },
  {
    title: "Nutrition",
    description:
      "Adopte une alimentation équilibrée avec des plans nutritionnels conçus pour tes objectifs.",
    image: "/programs/nutrition.jpg",
  },
];
