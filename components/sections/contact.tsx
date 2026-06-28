"use client";

import { useState } from "react";
import { ArrowRight, Check, Linkedin, Mail } from "lucide-react";
import { officialLinks } from "@/data/i18n";
import { useLocale } from "../locale-context";
import { Reveal } from "../ui";
import { ButtonLink } from "../ui/primitives";

export function ContactSection() {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(officialLinks.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-orbit" aria-hidden="true" />
      <div className="shell contact-inner">
        <Reveal>
          <p className="eyebrow light"><span>✳</span>{t.contact.eyebrow}</p>
          <h2>{t.contact.title}<br /><em>{t.contact.emphasis}</em></h2>
          <p className="contact-copy">{t.contact.copy}</p>
          <div className="contact-actions">
            <ButtonLink href={`mailto:${officialLinks.email}`}>{t.contact.action} <ArrowRight size={18} /></ButtonLink>
            <a className="contact-social" href={officialLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
            <button className="copy-email" onClick={copy}>{copied ? <Check size={16} /> : <Mail size={16} />}{copied ? t.contact.copied : officialLinks.email}</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
