// src/components/Hero.tsx

type StatProps = {
  label: string;
  value: string;
};

function Stat({ label, value }: StatProps) {
  return (
    <div className="stat">
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
    </div>
  );
}

export default function Hero() {
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
