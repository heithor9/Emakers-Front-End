import React from 'react'
import './App.css';

import imagem from "./imgs/imagem1.png"
import enter from "./imgs/seta.png"
const App = () => {
  return (
    <div className='main'>
      <div className='quadrante1'>
        <div className='boxLogin'>
          <div className='titulo'>Recuperar Conta</div>
          <input className='email' type="input" placeholder='E-mail'/>
        </div>
        <button className='enter' id = 'Enter'><img src={enter} alt = "enter"/></button>
        <form action="http://localhost:5174/"><button className='conta' id = 'Conta'>Criar Conta</button></form>
        <form action="http://localhost:5175/"><button className='esqueceuSenha' id ='Esqueceu'>Fazer Login</button></form>
      </div>
      <div className='quadrante2'><img src={imagem} alt = "imagem"/></div>
    </div>

  );
};

export default App;
