// src/components/Header.tsx

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/* Avatar con imagen real */}
        <div className="avatar">
          <img
            src="/my-portfolio/images/diego-perfil.jpg"
            alt="Foto de Diego Rodríguez"
            className="avatar-img"
          />
        </div>

        <div>
          <p className="overline">Portafolio</p>
          <h1 className="name">Diego Rodríguez</h1>
        </div>
      </div>

      <nav className="nav">
        <a href="#about">Sobre mí</a>
        <a href="#experience">Experiencia</a>
        <a href="#education">Estudios</a>
        <a href="#projects">Proyectos</a>
        <a href="#skills">Habilidades</a>
        <a href="#riff-and-code">Riff &amp; Code</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}
