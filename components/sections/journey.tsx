"use client";

import { ArrowRight } from "lucide-react";
import { useLocale } from "../locale-context";
import { Reveal, SectionHeading } from "../ui";
import { ButtonLink } from "../ui/primitives";

export function JourneySection() {
  const { t } = useLocale();
  return (
    <section className="section journey-section" id="journey">
      <div className="shell">
        <SectionHeading eyebrow={t.journey.eyebrow} title={t.journey.title} />
        <div className="journey-grid">
          <Reveal className="journey-intro">
            <p>{t.journey.intro}</p>
            <ButtonLink href="#contact" variant="secondary">{t.contact.action} <ArrowRight size={16} /></ButtonLink>
          </Reveal>
          <div className="timeline">
            {t.journey.entries.map((item, index) => (
              <Reveal className="timeline-item" key={`${item.period}-${item.role}`} delay={index * 0.06}>
                <span className="timeline-dot" />
                <p className="timeline-period">{item.period}</p>
                <div><h3>{item.role}</h3><span>{item.company}</span><p>{item.detail}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
