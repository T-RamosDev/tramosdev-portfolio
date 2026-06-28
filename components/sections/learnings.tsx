"use client";

import { useLocale } from "../locale-context";
import { Reveal, SectionHeading } from "../ui";
import { Badge, SurfaceCard } from "../ui/primitives";

export function LearningsSection() {
  const { t } = useLocale();
  return (
    <section className="section studies-section" id="learnings">
      <div className="shell">
        <SectionHeading eyebrow={t.studies.eyebrow} title={t.studies.title} copy={t.studies.copy} />
        <div className="studies-grid">
          {t.studies.items.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.05}>
              <SurfaceCard className="study-card">
                <div className="study-top"><span>{item.number}</span><Badge>{item.progress}</Badge></div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </SurfaceCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
