"use client";

import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Github, Search } from "lucide-react";
import { useLocale } from "../locale-context";
import { ProjectVisual } from "../project-visual";
import { Reveal, SectionHeading } from "../ui";
import { Badge, ButtonLink, TextInput } from "../ui/primitives";

export function ProjectsSection() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<string>(t.work.filters[0]);
  const [query, setQuery] = useState("");
  const visible = useMemo(
    () => t.work.projects.filter((project) =>
      (filter === t.work.filters[0] || project.category === filter) &&
      project.title.toLowerCase().includes(query.toLowerCase())),
    [filter, query, t],
  );

  useEffect(() => setFilter(t.work.filters[0]), [t]);
  const hasMultipleProjects = t.work.projects.length > 1;

  return (
    <section className="section work-section" id="projects">
      <div className="shell">
        <SectionHeading eyebrow={t.work.eyebrow} title={t.work.title} copy={t.work.copy} />
        {hasMultipleProjects && <Reveal className="project-controls">
          <div className="filter-row" aria-label={t.work.search}>
            {t.work.filters.map((item) => (
              <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>
            ))}
          </div>
          <TextInput className="project-search" icon={<Search size={16} />} label={t.work.search} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.work.search} />
        </Reveal>}
        <div className="projects-grid">
          {visible.map((project, index) => {
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
        {visible.length === 0 && <p className="empty-state">{t.work.empty}</p>}
      </div>
    </section>
  );
}
