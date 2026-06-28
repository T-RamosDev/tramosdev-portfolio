"use client";

import { useContent } from "../content";
import { ArrowLink, Reveal, SectionHeading } from "../ui";

export function AboutSection() {
  const t = useContent();
  return (
    <section className="section shell" id="about">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
      <div className="about-grid">
        <Reveal className="about-statement"><p>{t.about.statement}</p></Reveal>
        <Reveal className="about-details" delay={0.1}>
          <p>{t.about.body1}</p>
          <p>{t.about.body2}</p>
          <ArrowLink href="#journey">{t.about.link}</ArrowLink>
        </Reveal>
      </div>
      <Reveal className="principles">
        {t.about.principles.map((label, index) => (
          <div className="principle" key={label}><span>0{index + 1}</span><p>{label}</p></div>
        ))}
      </Reveal>
    </section>
  );
}
