import type { NavMenuConfig } from "@/types";


export const navMenuConfig: NavMenuConfig = {
  links: [
    {
      title: "Inicio",
      href: "/",
    },
    {
      title: "Precios",
      href: "/pricing",
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
          title: "Corporativa",
          href: "/soluciones/corporativa",
          description:
            "",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
        {
          title: "Blog",
          href: "/soluciones/blog",
          description: "",
          image: "/images/examples/pricing.jpg",
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
          description:
            "",
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
          title: "Static Blog",
          href: "/blog",
          description: "A Markdown/MDX blog built using Content Collections.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg",
        },
        {
          title: "Anime List",
          href: "/animes",
          description:
            "Fetch anime content from an graphql endpoint. Tabs component.",
          image: "/images/examples/animes.jpg",
          launched: true,
        },
        
      ],
    },
  ]
  
};
