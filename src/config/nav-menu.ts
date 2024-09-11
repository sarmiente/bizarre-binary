import type { NavMenuConfig } from "@/types";


export const navMenuConfig: NavMenuConfig = {
  links: [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Precios",
      href: "/precios",
    },
    {
      title: "Portafolio",
      href: "/portafolio",
    }
  ],
 
    pagesNav: [
     {
      title: "Soluciones",
      items: [
        {
          title: "Blogs",
          href: "/soluciones/blogs",
          description: "",
          image: "/images/examples/pricing.jpg",
        },
        {
          title: "Corporativa",
          href: "/soluciones/corporativa",
          description: "",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
        {
          title: "Landing Page",
          href: "/soluciones/landing-pages",
          description: "",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "Tienda Online",
          href: "/soluciones/tiendas-online",
          description: "",
          image: "/images/examples/changelog.jpg",
        },
        {
          title: "Portafolios",
          href: "/soluciones/portafolios",
          description: "",
          image: "/images/examples/about.jpg",
        },
        {
          title: "Newsletters",
          href: "/soluciones/newsletters",
          description: "",
          image: "/images/examples/newsletter.jpg",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Explora",
      items: [
        {
          title: "Blog",
          href: "/blog",
          description: "Encuentra nuestros ultimos articulos",
          image: "/images/examples/static-blog.jpg",
        },
      ],
    },
  ]
  
};
