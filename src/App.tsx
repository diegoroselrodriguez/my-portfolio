// src/App.tsx
import "./App.css";

function App() {
  return (
    <main className="app">
      <div className="app-container">
        <Header />
        <Hero />
        <SectionDivider />

        <ExperienceSection />
        <SectionDivider />

        <SkillsSection />
        <SectionDivider />

        <RiffAndCodeSection />
        <Footer />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="avatar" />
        <div>
          <p className="overline">Portafolio</p>
          <h1 className="name">Diego Rodríguez</h1>
        </div>
      </div>

      <nav className="nav">
        <a href="#experience">Experiencia</a>
        <a href="#skills">Habilidades</a>
        <a href="#riff-and-code">Riff &amp; Code</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <span className="tagline">
        Ingeniero Informático · Madrid · WordPress &amp; Web Dev
      </span>

      <div className="hero-text">
        <h2>
          Desarrollo soluciones web modernas,{" "}
          <span className="accent">WordPress avanzado</span> y experiencias
          digitales a medida.
        </h2>
        <p>
          Soy ingeniero informático especializado en desarrollo web, WordPress
          avanzado, SEO técnico y sistemas integrados. Combino ingeniería,
          diseño y marketing digital para construir plataformas escalables,
          mantenibles y orientadas a resultados reales.
        </p>
      </div>

      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          Ver proyectos
        </a>
        <a href="#contact" className="btn-outline">
          Contactar
        </a>
      </div>

      <div className="hero-stats">
        <Stat label="Experiencia total" value="+7 años" />
        <Stat label="Stack principal" value="React · WordPress · SEO" />
        <Stat label="Ubicación" value="Madrid · Chile (remoto)" />
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
    </div>
  );
}

function SectionDivider() {
  return <div className="divider" />;
}

function SectionTitle({
  id,
  overline,
  title,
}: {
  id?: string;
  overline: string;
  title: string;
}) {
  return (
    <div className="section-title" id={id}>
      <p className="overline">{overline}</p>
      <h3>{title}</h3>
    </div>
  );
}

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

function ExperienceSection() {
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

function SkillsSection() {
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

function RiffAndCodeSection() {
  return (
    <section id="riff-and-code" className="section">
      <SectionTitle
        overline="Marca personal"
        title="Riff & Code: música, arte y tecnología"
      />
      <div className="card card-full">
        <p className="card-text">
          Riff &amp; Code es mi espacio personal donde mezclo desarrollo web,
          diseño e ilustración con mi pasión por la música, especialmente el
          rock y el metal. A través de esta marca exploro proyectos que combinan
          interfaces web, identidad visual y contenido musical.
        </p>
        <p className="card-text card-text-muted">
          Mi objetivo es crear experiencias digitales que no sólo funcionen bien
          a nivel técnico, sino que también transmitan una estética clara y una
          personalidad propia. Desde diseños tipo tatuaje en blanco y negro
          hasta composiciones musicales para vídeos o webs, busco un lenguaje
          visual y sonoro coherente.
        </p>
        <p className="card-footer-note">
          Próximamente incluiré demos de proyectos, ilustraciones originales y
          vídeos tocando guitarra vinculados a proyectos web.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div>
        <p className="footer-title">¿Colaboramos?</p>
        <p className="footer-text">
          Puedes contactarme para proyectos de desarrollo web, WordPress
          avanzado, integraciones o consultorías técnicas.
        </p>
      </div>
      <div className="footer-links">
        <p>
          Email:{" "}
          <a href="mailto:tu-correo@ejemplo.com">
            tu-correo@ejemplo.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/tu-perfil
          </a>
        </p>
      </div>
    </footer>
  );
}

export default App;
