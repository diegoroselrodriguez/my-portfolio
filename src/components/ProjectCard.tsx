// src/components/ProjectCard.tsx

export type Project = {
  title: string;
  company: string;
  year: string;
  tech: string[];
  summary: string;
  link?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-header">
        <h4 className="project-title">{project.title}</h4>
        <span className="project-year">{project.year}</span>
      </div>

      <p className="project-company">{project.company}</p>
      <p className="project-summary">{project.summary}</p>

      <div className="project-tags">
        {project.tech.map((t) => (
          <span key={t} className="project-tag">
            {t}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Ver proyecto
        </a>
      )}
    </article>
  );
}
