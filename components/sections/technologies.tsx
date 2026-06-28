"use client";

import { useLocale } from "../locale-context";
import { Reveal, SectionHeading } from "../ui";

export function TechnologiesSection() {
  const { t } = useLocale();
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
      <Reveal className="stack-marquee">
        <p>{t.expertise.tools}</p>
        <div className="stack-track">{t.stack.map((item) => <span key={item}>{item}<i>✳</i></span>)}</div>
      </Reveal>
    </section>
  );
}
