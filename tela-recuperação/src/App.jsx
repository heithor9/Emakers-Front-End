import React from 'react';
import './App.css'; // Assumindo que você está usando um arquivo CSS separado
import seta from "./imgs/seta.png"
const App = () => {
  return (
    <div className='main'>
      <div className='login'>
        <button className='botao'><img src={seta} alt = "seta"/> </button>
        <div className='title'><div>Recuperar</div><div>Conta</div></div>
        <form className='forms'>
          <input className = 'input'type="input" placeholder='E-mail'/>
        </form>
        <div className='infos'><strong>Criar conta <br></br>
          Fazer Login</strong></div>

      </div>
      <div className='image'>

      </div>
    </div>

  );
};

export default App;
