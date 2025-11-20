// src/components/AboutSection.tsx
import SectionTitle from "./SectionTitle";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <SectionTitle
        overline="Sobre mí"
        title="Quién soy y cómo trabajo"
      />

      <div className="card card-full">
        <p className="card-text">
          Soy Diego Rodríguez, ingeniero informático chileno viviendo en Madrid.
          Desde 2014 he trabajado desarrollando soluciones digitales para
          universidades, empresas tecnológicas y negocios de diferentes
          sectores, combinando desarrollo web, sistemas a medida y marketing
          digital.
        </p>

        <p className="card-text card-text-muted">
          En mi trabajo disfruto especialmente de:
        </p>
        <ul className="about-list">
          <li>
            Entender bien el contexto del negocio y traducirlo en funcionalidades
            claras.
          </li>
          <li>
            Diseñar sistemas limpios y mantenibles, aunque por detrás tengan
            lógica compleja o integraciones delicadas.
          </li>
          <li>
            Cuidar tanto la parte técnica (rendimiento, estabilidad, SEO) como
            la experiencia del usuario final.
          </li>
        </ul>

        <p className="card-text card-text-muted">
          He trabajado con WordPress a nivel avanzado (plugins, hooks,
          integraciones, newsletters, eCommerce), he desarrollado sistemas
          cliente-servidor con PHP y bases de datos Oracle/MySQL, y he liderado
          proyectos donde tengo que hablar tanto con perfiles técnicos como con
          gente de negocio o marketing.
        </p>

        <p className="card-footer-note">
          Más allá de la programación, también compongo música y me interesa el
          diseño visual. Mi marca personal, Riff &amp; Code, mezcla desarrollo,
          arte y música, y refleja la forma en que entiendo los proyectos:
          soluciones técnicas sólidas con una identidad propia.
        </p>
      </div>
    </section>
  );
}
