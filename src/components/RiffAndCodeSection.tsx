// src/components/RiffAndCodeSection.tsx
import SectionTitle from "./SectionTitle";

export default function RiffAndCodeSection() {
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
