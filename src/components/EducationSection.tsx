// src/components/EducationSection.tsx
import SectionTitle from "./SectionTitle";

type EducationItem = {
  title: string;
  center: string;
  period: string;
  description?: string;
};

const education: EducationItem[] = [
  {
    title: "Ingeniería Civil en Computación (Ingeniero Informático)",
    center: "Universidad de Talca · Chile",
    period: "2007 – 2014",
    description:
      "Carrera de 6 años enfocada en desarrollo de software, bases de datos, arquitectura de sistemas, redes y gestión de proyectos TI.",
  },
  {
    title: "Máster en Dirección de Marketing Digital",
    center: "Constanza Business & Protocol School · Madrid",
    period: "2018",
    description:
      "Formación en estrategia digital, SEO, SEM, analítica, gestión de campañas y presencia online de marcas.",
  },
  {
    title: "Estudios de inglés y formación continua",
    center: "Australia + cursos recientes",
    period: "2015 – Actualidad",
    description:
      "Curso intensivo de inglés en Australia (5 meses) y formación continua en inglés orientada a comunicación profesional y entornos técnicos.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <SectionTitle
        overline="Formación"
        title="Estudios y formación complementaria"
      />

      <div className="education-grid">
        {education.map((item) => (
          <article key={item.title} className="education-card">
            <h4 className="education-title">{item.title}</h4>
            <p className="education-center">{item.center}</p>
            <p className="education-period">{item.period}</p>
            {item.description && (
              <p className="education-description">{item.description}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
