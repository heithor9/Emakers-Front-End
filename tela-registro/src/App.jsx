import React from 'react'
import './App.css';

import imagem from "./imgs/Imagem1.png"
import enter from "./imgs/seta.png"
const App = () => {
  return (
    <div className='main'>
      <div className='quadrante1'>
        <div className='boxLogin'>
          <div className='titulo'>Registrar</div>
          <input className='nome' type="input" placeholder='Nome de Usuário'/>
          <input className='email' type="input" placeholder='E-mail'/>
          <input className='cpf' type="input" placeholder='CPF'/>
          <input className='senha' type="input" placeholder='Senha'/>
          <input className='confirmarSenha' type="input" placeholder='Confirmar Senha'/>
        </div>
        <button className='enter' id = 'Enter'><img src={enter} alt = "enter"/></button>
        <form action="http://localhost:5174/"><button className='conta' id = 'Conta'>Fazer Login</button></form>
      </div>
      <div className='quadrante2'><img src={imagem} alt = "imagem"/></div>
    </div>

  );
};

export default App;
