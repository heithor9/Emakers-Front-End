import React from 'react';
import './App.css'; // Assumindo que você está usando um arquivo CSS separado
import seta from "./imgs/seta.png"
const App = () => {
  return (
    <div className='main'>
      <div className='login'>
        <button className='botao'><img src={seta} alt = "seta"/> </button>
        <div className='title'>Registrar</div>
        <form className='forms'>
          <input className = 'input'type="input" placeholder='Nome de Usuário'/>
          <input className='input' type="input" placeholder='E-mail'/>
          <input className='input' type="input" placeholder='CPF'/>
          <input className='input' type="input" placeholder='Senha'/>
          <input className='input' type="input" placeholder='Confirmar Senha'/>
        </form>
        <div className='infos'>Fazer Login</div>
      </div>
      <div className='image'>

      </div>
    </div>

  );
};

export default App;
