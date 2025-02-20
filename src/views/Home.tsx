import React from 'react';
import perfil from '../assets/perfil circulo.png'
import '../App.css'



function Home() {
  return (
    <div className='Home'>
        <div className='titulo'>
        <h1>Gabriel Caldubehere</h1>
        <h2>Desarrollador Front End</h2>   
        </div>


        <img className='perfil' src={perfil} alt="perfil" />
    </div>
  )
}

export default Home