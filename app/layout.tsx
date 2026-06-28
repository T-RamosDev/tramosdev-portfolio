import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.DEPLOY_PRIME_URL ??
  process.env.URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "T-RAMOS DEV — Evolução em código", template: "%s — T-RAMOS DEV" },
  description:
    "T-RAMOS DEV é a marca pessoal de T. Ramos para documentar sua evolução em desenvolvimento web, tecnologia e preparação para Engenharia da Computação.",
  keywords: ["Desenvolvimento Web", "Frontend", "React", "Next.js", "TypeScript", "Brasil"],
  authors: [{ name: "T-RAMOS DEV" }],
  creator: "T-RAMOS DEV",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "T-RAMOS DEV",
    title: "T-RAMOS DEV — Evolução em código",
    description: "Uma jornada real de aprendizado, projetos públicos e evolução no desenvolvimento web.",
  },
  twitter: {
    card: "summary_large_image",
    title: "T-RAMOS DEV — Evolução em código",
    description: "Desenvolvimento web, aprendizado contínuo e evolução profissional.",
  },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090B",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "T. Ramos",
    alternateName: "T-RAMOS DEV",
    description: "Estudante e desenvolvedor web em formação, fundador da marca pessoal T-RAMOS DEV.",
    email: "mailto:tramosdev@outlook.com",
    sameAs: ["https://www.linkedin.com/in/t-ramos-855927419/"],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
