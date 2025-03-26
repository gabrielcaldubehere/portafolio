import React from "react";
import perfil from "../assets/perfil circulo.png";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import Header from "../components/Header";
import "../App.css";

function Home() {
  return (
    <div id="top">
      <Header />
      <div className="home">
        <div className="titulo">
          <h1 className="nombre">Gabriel Caldubehere</h1>
          <div>
            <h2 className="subtitulo">Desarrollador Front-End</h2>
            <h3>Creando experiencias digitales innovadoras</h3>
          </div>

          <div className="redes-sociales">
            <a
              href="https://github.com/gabrielcaldubehere"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visita mi perfil de GitHub"
              className="social-link"
            >
              <BsGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielcaldubehere"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visita mi perfil de LinkedIn"
              className="social-link"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="/CV Hector Gabriel Caldubehere.pdf"
              download
              aria-label="Descargar mi CV"
              className="social-link"
            >
              <FaFileDownload size={25} />
            </a>
          </div>
        </div>
        <img className="perfil" src={perfil} alt="perfil" />
      </div>
    </div>
  );
}

export default Home;
