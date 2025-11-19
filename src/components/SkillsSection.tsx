// src/components/SkillsSection.tsx
import SectionTitle from "./SectionTitle";

const skills = [
  "React & TypeScript",
  "Vite",
  "WordPress avanzado",
  "PHP, JavaScript, AJAX, jQuery",
  "MySQL & Oracle",
  "WooCommerce personalizado",
  "SEO técnico",
  "HTML & CSS responsive",
  "Integraciones externas",
  "Newsletters HTML",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <SectionTitle
        overline="Habilidades"
        title="Tecnologías y especialización"
      />
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill} className="skill-pill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
