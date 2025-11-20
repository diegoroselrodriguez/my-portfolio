// src/components/Header.tsx
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // al hacer clic en un enlace, se cierra el menú en móvil
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <div className="avatar">
            {/* cambia la ruta de la imagen si usas otra */}
            <img
              src="/images/diego-perfil.jpg"
              alt="Foto de Diego Rodríguez"
              className="avatar-img"
            />
          </div>
          <div>
            <p className="overline">Portafolio</p>
            <h1 className="name">Diego Rodríguez</h1>
          </div>
        </div>

        {/* Botón hamburguesa solo visible en móvil */}
        <button
          type="button"
          className="nav-toggle"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label="Abrir/cerrar menú de navegación"
        >
          <span className="nav-toggle-icon">☰</span>
          <span className="nav-toggle-text">Menú</span>
        </button>
      </div>

      {/* Menú de navegación */}
      <nav
        className={nav ${isOpen ? "nav-open" : ""}}
      >
        <a href="#about" onClick={handleLinkClick}>
          Sobre mí
        </a>
        <a href="#experience" onClick={handleLinkClick}>
          Experiencia
        </a>
        <a href="#education" onClick={handleLinkClick}>
          Estudios
        </a>
        <a href="#projects" onClick={handleLinkClick}>
          Proyectos
        </a>
        <a href="#skills" onClick={handleLinkClick}>
          Habilidades
        </a>
        <a href="#riff-and-code" onClick={handleLinkClick}>
          Riff &amp; Code
        </a>
        <a href="#contact" onClick={handleLinkClick}>
          Contacto
        </a>
      </nav>
    </header>
  );
}
