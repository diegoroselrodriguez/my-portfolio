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
          <a href="mailto:diego.rosel89@gmail.com">
            diego.rosel89@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/diego-rosel-rodriguez/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/diego-rosel-rodriguez/
          </a>
        </p>
      </div>
    </footer>
  );
}
