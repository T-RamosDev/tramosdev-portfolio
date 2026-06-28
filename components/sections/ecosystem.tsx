"use client";

import {
  ArrowUpRight,
  Figma,
  Github,
  Linkedin,
  Mail,
  MessageCircleMore,
  Triangle,
  type LucideIcon,
} from "lucide-react";
import { officialLinks } from "@/data/i18n";
import { Badge } from "../ui/primitives";
import { useLocale } from "../locale-context";
import { Reveal, SectionHeading } from "../ui";

const icons: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  discord: MessageCircleMore,
  figma: Figma,
  vercel: Triangle,
  outlook: Mail,
};

const links: Record<string, string | null> = {
  github: officialLinks.github,
  linkedin: officialLinks.linkedin,
  discord: officialLinks.discord,
  figma: officialLinks.figma,
  vercel: officialLinks.vercel,
  outlook: `mailto:${officialLinks.email}`,
};

export function EcosystemSection() {
  const { t } = useLocale();

  return (
    <section className="section ecosystem-section" id="ecosystem">
      <div className="shell">
        <SectionHeading
          eyebrow={t.ecosystem.eyebrow}
          title={t.ecosystem.title}
          copy={t.ecosystem.copy}
        />
        <div className="ecosystem-grid">
          {t.ecosystem.items.map((item, index) => {
            const Icon = icons[item.key];
            const href = links[item.key];
            const content = (
              <>
                <div className="ecosystem-card-top">
                  <span className="ecosystem-icon" aria-hidden="true"><Icon size={21} /></span>
                  <Badge tone={item.state === "active" ? "primary" : "neutral"}>{item.status}</Badge>
                </div>
                <div className="ecosystem-card-copy">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="ecosystem-action">
                  {href ? t.ecosystem.visit : t.ecosystem.unavailable}
                  {href && <ArrowUpRight size={15} aria-hidden="true" />}
                </span>
              </>
            );

            return (
              <Reveal className="ecosystem-reveal" delay={index * 0.04} key={item.key}>
                {href ? (
                  <a
                    className="ecosystem-card ds-card is-linked"
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={`${t.ecosystem.visit} ${item.name}`}
                  >
                    {content}
                  </a>
                ) : (
                  <article className="ecosystem-card ds-card" aria-label={`${item.name}: ${item.status}`}>
                    {content}
                  </article>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
