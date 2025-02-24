import React from "react";
import "../App.css";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre Mi</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
