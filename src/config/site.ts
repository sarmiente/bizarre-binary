import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Sarpin Devs - Sarpin.co",
  description:
    "An modern example app built using Astro v4 & shadcn/ui. Inspired by shadcn/taxonomy.",
  url: "",
  ogImage: "",
  links: {
    twitter: "",
    github: "",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Compañia",
    items: [
      { title: "Nosotros", href: "/nosotros" },
            
    ],
  },
  {
    title: "Oferta",
    items: [
      { title: "Diseño y Desarrollo Web", href: "#" },
      { title: "Aplicaciones a la medida", href: "#" },
      { title: "Hosting", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Politica de Privacidad", href: "/politica-de-privacidad" },
      { title: "Terminos y condiciones", href: "/terminos-y-condiciones" },
      
    ],
  },
];