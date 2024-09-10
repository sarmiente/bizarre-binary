import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Sarpin Devs - Sarpin.co",
  description:
    "Expertos en desarrollo web en Barranquilla. Diseños personalizados para tu empresa. Contáctanos y obtén una asesoría profesional para impulsar tu presencia en línea.",
  url: "",
  ogImage: "",
  links: {
    facebook: "https://www.facebook.com/sarpin.co/",
    instagram: "https://www.instagram.com/sarpin.co/",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Compañia",
    items: [
      { title: "Inicio", href: "/" },
      { title: "Precios", href: "/pricing" },
      { title: "Contacto", href: "/contacto" },
            
    ],
  },
  {
    title: "Recursos",
    items: [
      { title: "Portafolio", href: "/portafolio" },
      { title: "Soluciones", href: "/soluciones" },
      { title: "Explora", href: "/blog" },
    ],
  },
  {
    title: "Oferta",
    items: [
      { title: "Diseño y Desarrollo Web", href: "#features" },
      { title: "Aplicaciones a la medida", href: "#" },
      { title: "Dominio & Hosting", href: "#" },
      { title: "Optimizacion en Buscadores", href: "#" },
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