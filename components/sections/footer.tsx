"use client";

import { Github, Linkedin, Mail, MessageCircleMore } from "lucide-react";
import { officialLinks } from "@/data/content";
import { useContent } from "../content";
import { BrandLogo } from "../brand/logo";

export function SiteFooter() {
  const t = useContent();
  return (
    <footer>
      <div className="shell footer-inner">
        <a className="footer-logo" href="#top" aria-label="Voltar ao início"><BrandLogo /></a>
        <p>{t.footer.tagline}</p>
        <div className="footer-links">
          <a href={`mailto:${officialLinks.email}`}><Mail size={16} />E-mail</a>
          <a href={officialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
          {officialLinks.github ? (
            <a href={officialLinks.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
          ) : (
            <span className="footer-link-disabled" aria-label="GitHub em breve"><Github size={15} />GitHub · em breve</span>
          )}
          {officialLinks.discord ? (
            <a href={officialLinks.discord} target="_blank" rel="noreferrer"><MessageCircleMore size={16} />Discord</a>
          ) : (
            <span className="footer-link-disabled" aria-label="Discord em desenvolvimento"><MessageCircleMore size={15} />Discord · em desenvolvimento</span>
          )}
        </div>
        <div className="footer-base"><span>{t.footer.copyright}</span><span>{t.footer.location} <i aria-hidden="true" /></span></div>
      </div>
    </footer>
  );
}
