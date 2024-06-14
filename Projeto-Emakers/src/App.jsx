import React from 'react'
import './App.css';
import seta from "./imgs/seta.png"
import imagem from "./imgs/imagem1.png"
import enter from "./imgs/enter.png"
const App = () => {
  return (
    <div className='main'>
      <div className='quadrante1'>
        <div className='boxLogin'>
          <div className='titulo'>Login</div>
          <input className='email' type="input" placeholder='E-mail'/>
          <input className='senha' type="input" placeholder='Senha'/>
          
        </div>
        <button className='enter' id = 'Enter'><img src={enter} alt = "enter"/></button>
        <form action="http://localhost:5175/"><button className='conta' id = 'Conta'>Criar Conta</button></form>
        <form action="http://localhost:5174/"><button className='esqueceuSenha' id ='Esqueceu'>Esqueceu a Senha?</button></form>
      </div>
      <div className='quadrante2'><img src={imagem} alt = "imagem"/></div>
    </div>

  );
};

export default App;
