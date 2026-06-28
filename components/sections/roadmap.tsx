"use client";

import { useContent } from "../content";
import { Reveal, SectionHeading } from "../ui";
import { Badge } from "../ui/primitives";

export function RoadmapSection() {
  const t = useContent();
  return (
    <section className="section shell" id="roadmap">
      <SectionHeading eyebrow={t.roadmap.eyebrow} title={t.roadmap.title} copy={t.roadmap.copy} />
      <div className="roadmap-list">
        {t.roadmap.items.map((item, index) => (
          <Reveal className={`roadmap-item state-${item.state}`} key={item.title} delay={index * 0.05}>
            <div className="roadmap-index"><span>0{index + 1}</span><i /></div>
            <Badge tone={item.state === "done" ? "success" : item.state === "current" ? "primary" : "neutral"}>{item.status}</Badge>
            <h3>{item.title}</h3>
            <small>{item.detail}</small>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
