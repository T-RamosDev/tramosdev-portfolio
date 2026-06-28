import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "T-RAMOS DEV",
    short_name: "T-RAMOS",
    description: "Projetos públicos, aprendizado contínuo e evolução real em desenvolvimento web.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#A855F7",
    lang: "pt-BR",
    categories: ["education", "productivity", "technology"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
