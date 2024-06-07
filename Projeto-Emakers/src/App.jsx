import React from 'react';
import './App.css'; // Assumindo que você está usando um arquivo CSS separado

const App = () => {
  return (
    <div className='main'>
      <div className='login'>
        <button className='botao'> ➜ </button>
        <div className='title'>Login</div>
        <form className='forms'>
          <input className = 'input'type="input" placeholder='E-mail'/>
          <input className='input' type="input" placeholder='Senha'/>
        </form>
        <div className='infos'><strong>Criar conta <br></br>
          Esqueceu a Senha?</strong></div>

      </div>
      <div className='image'>

      </div>
    </div>

  );
};

export default App;
