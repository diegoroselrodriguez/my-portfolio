// src/components/ExperienceSection.tsx
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    company: "DIGI España",
    period: "2024 – Actualidad",
    role: "Desarrollador web & CMS interno",
    description:
      "Gestión de CMS internos en WordPress, desarrollo de funcionalidades personalizadas (como Fantasy DIGI), creación de mapas interactivos con SVG/JS, diseño de newsletters avanzadas y optimización SEO.",
  },
  {
    company: "PETERBAL (Madrid)",
    period: "2019 – 2023",
    role: "Desarrollador WordPress & Marketing Digital",
    description:
      "Mantenimiento y evolución de webs en WordPress, WooCommerce, uso de Google Analytics y Search Console, optimización de rendimiento, SEO técnico y soporte a campañas de marketing.",
  },
  {
    company: "Proyectos Freelance",
    period: "2018 – Actualidad",
    role: "Desarrollador web & consultor",
    description:
      "Desarrollo de sitios eCommerce, integración de sistemas externos, personalización de temas y plugins, asesoría en marketing digital y optimización SEO.",
  },
  {
    company: "Universidad de Talca (Chile)",
    period: "2014 – 2017",
    role: "Desarrollador & Gestor de proyectos",
    description:
      "Desarrollo de un sistema de gestión para Bienestar Estudiantil, integración con bases de datos externas, análisis integral de alumnos y mantenimiento de aplicaciones internas.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <SectionTitle
        overline="Experiencia"
        title="Trayectoria profesional"
      />
      <div className="cards">
        {experiences.map((exp) => (
          <article key={exp.company} className="card">
            <div className="card-header">
              <h4>{exp.company}</h4>
              <span className="card-period">{exp.period}</span>
            </div>
            <p className="card-role">{exp.role}</p>
            <p className="card-text">{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
