import React from "react";
import perfil from "../assets/perfil circulo.png";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import "../App.css";

function Home() {
  return (
    <div className="Home">
      <div className="titulo">
        <h1 className="nombre">Gabriel Caldubehere</h1>
        <h2 className="subtitulo">Desarrollador Front End</h2>
        <div className="redes-sociales">
          <a href="https://github.com/gabrielcaldubehere" target="_blank">
            <BsGithub size={50} color="green" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielcaldubehere"
            target="_blank"
          >
            <FaLinkedin size={50} color="orange" />
          </a>
          <a href="/CV Hector Gabriel Caldubehere.pdf" download>
            <FaFileDownload size={50} color="#7e13b0" />
          </a>
        </div>
      </div>

      <img className="perfil" src={perfil} alt="perfil" />
    </div>
  );
}

export default Home;
