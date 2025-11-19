// src/components/ProjectsSection.tsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fantasy DIGI",
    company: "DIGI España",
    year: "2024",
    tech: ["WordPress", "PHP", "JavaScript", "MySQL", "WPCode"],
    summary:
      "Aplicación tipo Fantasy Football para empleados de DIGI. Permite crear equipos, asignar puntos por jornada, y generar rankings con premios. Desarrollado dentro de WordPress usando HTML, CSS y JS personalizados, lógica PHP y tablas propias en la base de datos.",
  },
  {
    title: "Mapa interactivo de Europa",
    company: "DIGIContigo (Intranet DIGI)",
    year: "2024",
    tech: ["SVG", "JavaScript", "WordPress", "WPCode"],
    summary:
      "Mapa SVG con países destacados, colores dinámicos, efectos hover, clic para redirección y tarjetas de información dentro de WordPress. Totalmente integrado a WPCode.",
  },
  {
    title: "Plataforma eCommerce Fotoescuela.org",
    company: "Proyecto freelance",
    year: "2023",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS", "Plugins avanzados"],
    summary:
      "Desarrollo de eCommerce complejo para cursos y productos fotográficos. Personalización profunda de WooCommerce, creación de catálogos, formularios y sistema de solicitudes.",
  },
  {
    title: "Web y sistema de ventas para Qarnal",
    company: "Qarnal.es",
    year: "2022",
    tech: ["WordPress", "Servidor virtual", "Integraciones externas"],
    summary:
      "Desarrollo completo del sitio del restaurante Qarnal con integración de un sistema de ventas externo mediante servidor virtual, configuraciones avanzadas y resolución de problemas técnicos.",
  },
  {
    title: "Sistema de gestión Bienestar Estudiantil",
    company: "Universidad de Talca",
    year: "2016",
    tech: ["PHP", "Oracle", "JavaScript", "Ajax", "HTML", "CSS"],
    summary:
      "Sistema cliente-servidor para análisis integral de alumnos usando múltiples fuentes de datos socioeconómicos y académicos.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="section-title">
        <p className="overline">Proyectos</p>
        <h3>Trabajo real con impacto</h3>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
