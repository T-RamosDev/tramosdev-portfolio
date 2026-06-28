"use client";

import { useContent } from "../content";
import { Reveal, SectionHeading } from "../ui";

export function TechnologiesSection() {
  const t = useContent();
  return (
    <section className="section shell" id="technologies">
      <SectionHeading eyebrow={t.expertise.eyebrow} title={t.expertise.title} copy={t.expertise.copy} />
      <div className="capabilities">
        {t.expertise.capabilities.map((item, index) => (
          <Reveal className="capability" key={item.title}>
            <span>0{index + 1}</span>
            <div><h3>{item.title}</h3><p>{item.description}</p></div>
            <div className="capability-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </Reveal>
        ))}
      </div>
      <Reveal className="technology-progress">
        <div className="technology-progress-heading">
          <p>{t.expertise.progressLabel}</p>
          <span>Autoavaliação baseada em prática atual</span>
        </div>
        <div className="progress-list">
          {t.expertise.progress.map((item) => (
            <div className="progress-item" key={item.name}>
              <div className="progress-meta">
                <strong>{item.name}</strong>
                <span>{item.stage}</span>
              </div>
              <div className="progress-track" aria-label={`${item.name}: ${item.stage}`}>
                <i style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="technology-tools" aria-label="Tecnologias em estudo">
          {t.expertise.tools.map((item) => <span key={item}>{item}</span>)}
        </div>
      </Reveal>
    </section>
  );
}
