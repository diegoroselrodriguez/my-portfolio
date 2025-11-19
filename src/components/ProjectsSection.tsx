// src/components/ProjectsSection.tsx
import SectionTitle from "./SectionTitle";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Fantasy DIGI",
    company: "DIGI España",
    year: "2024",
    tech: ["WordPress", "PHP", "JavaScript", "MySQL", "WPCode"],
    summary:
      "Aplicación tipo Fantasy Football para empleados de DIGI. Permite crear equipos, asignar puntos por jornada y generar rankings mensuales con premios. Desarrollado dentro de WordPress usando HTML, CSS y JS personalizados, lógica PHP y tablas propias en la base de datos.",
  },
  {
    title: "Mapa interactivo de Europa",
    company: "DIGIContigo (Intranet DIGI)",
    year: "2024",
    tech: ["SVG", "JavaScript", "WordPress", "WPCode"],
    summary:
      "Mapa SVG incrustado en WordPress con países destacados, colores dinámicos, efectos hover y clic para redirigir a páginas específicas, además de tarjetas de información con datos por país.",
  },
  {
    title: "Plataforma eCommerce Fotoescuela.org",
    company: "Proyecto freelance",
    year: "2023",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS", "Plugins avanzados"],
    summary:
      "Plataforma compleja para cursos y productos fotográficos. Personalización profunda de WooCommerce, temas y plugins, incluyendo formularios, membresías y scripts que procesan datos desde archivos externos mediante hooks.",
  },
  {
    title: "Web y sistema de ventas para Qarnal",
    company: "Qarnal.es",
    year: "2022",
    tech: ["WordPress", "Servidor virtual", "Integraciones externas"],
    summary:
      "Desarrollo completo del sitio del restaurante Qarnal desde cero, con integración de un sistema de ventas externo configurando un servidor virtual y puertos necesarios.",
  },
  {
    title: "Sistema de gestión Bienestar Estudiantil",
    company: "Universidad de Talca",
    year: "2016",
    tech: ["PHP", "Oracle", "JavaScript", "Ajax", "HTML", "CSS"],
    summary:
      "Sistema cliente-servidor para el departamento de Bienestar Estudiantil. Integra datos socioeconómicos y académicos desde múltiples fuentes para apoyar decisiones de asistentes sociales y personal administrativo.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <SectionTitle
        overline="Proyectos"
        title="Trabajo real con impacto"
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={`${project.title}-${project.year}`} />
        ))}
      </div>
    </section>
  );
}
