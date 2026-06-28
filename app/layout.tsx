import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteUrl } from "@/data/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "T-RAMOS DEV | Evolução em Código", template: "%s | T-RAMOS DEV" },
  description:
    "Portfólio oficial da T-RAMOS DEV: uma jornada real de aprendizado, projetos públicos e evolução em desenvolvimento web rumo à Engenharia da Computação.",
  keywords: ["T-RAMOS DEV", "Desenvolvimento Web", "Front-end", "React", "Next.js", "TypeScript", "Brasil"],
  authors: [{ name: "T-RAMOS DEV" }],
  creator: "T-RAMOS DEV",
  publisher: "T-RAMOS DEV",
  category: "technology",
  alternates: { canonical: "/" },
  applicationName: "T-RAMOS DEV",
  appleWebApp: {
    capable: true,
    title: "T-RAMOS",
    statusBarStyle: "black-translucent",
  },
  icons: {
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "T-RAMOS DEV",
    title: "T-RAMOS DEV | Evolução em Código",
    description: "Uma jornada real de aprendizado, projetos públicos e evolução em desenvolvimento web.",
  },
  twitter: {
    card: "summary_large_image",
    title: "T-RAMOS DEV | Evolução em Código",
    description: "Projetos públicos, aprendizado contínuo e evolução real em desenvolvimento web.",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "T. Ramos",
    alternateName: "T-RAMOS DEV",
    url: siteUrl,
    description: "Estudante e desenvolvedor web em formação, fundador da marca pessoal T-RAMOS DEV.",
    email: "mailto:tramosdev@outlook.com",
    sameAs: ["https://www.linkedin.com/in/t-ramos-855927419/"],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
