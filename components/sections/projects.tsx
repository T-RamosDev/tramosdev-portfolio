"use client";

import { ExternalLink, Github } from "lucide-react";
import { useContent } from "../content";
import { ProjectVisual } from "../project-visual";
import { Reveal, SectionHeading } from "../ui";
import { Badge, ButtonLink } from "../ui/primitives";

export function ProjectsSection() {
  const t = useContent();

  return (
    <section className="section work-section" id="projects">
      <div className="shell">
        <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} copy={t.work.copy} />
        <Reveal className="project-status-legend">
          {t.work.statusLegend.map((status) => (
            <span className={status === "Em construção" ? "is-current" : ""} key={status}>
              <i aria-hidden="true" />{status}
            </span>
          ))}
        </Reveal>
        <div className="projects-grid">
          {t.work.projects.map((project, index) => {
            const sourceIndex = t.work.projects.findIndex((item) => item.title === project.title);
            return (
              <Reveal className="project-card" key={project.title} delay={index * 0.05}>
                <ProjectVisual type={t.projectVisuals[sourceIndex]} color={t.projectColors[sourceIndex]} />
                <div className="project-meta"><span>0{sourceIndex + 1} / {project.category}</span><span>V01</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-objective"><span>{t.work.objective}</span><p>{project.objective}</p></div>
                <div className="project-bottom">
                  <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <Badge tone="primary">{project.status}</Badge>
                </div>
                <div className="project-links">
                  {project.github ? (
                    <ButtonLink href={project.github} external variant="secondary"><Github size={15} />{t.work.github}</ButtonLink>
                  ) : (
                    <span className="project-link-status"><Github size={15} />{t.work.github}<small>{t.work.unavailable}</small></span>
                  )}
                  {project.demo ? (
                    <ButtonLink href={project.demo} external variant="secondary"><ExternalLink size={15} />{t.work.demo}</ButtonLink>
                  ) : (
                    <span className="project-link-status"><ExternalLink size={15} />{t.work.demo}<small>{t.work.unavailable}</small></span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
