// src/components/Footer.tsx

export default function Footer() {
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
