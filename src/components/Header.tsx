// src/components/Header.tsx

export default function Header() {
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
        <a href="#projects">Proyectos</a>
        <a href="#skills">Habilidades</a>
        <a href="#riff-and-code">Riff &amp; Code</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}
