import { useState } from 'react'
import './App.css'; 
import Linha from "./imgs/Line 1.png"
import Logo from "./imgs/Logo.png"
import lupa from "./imgs/LupaCerta.png"

function App() {
  return (
    <div>
      <header className='cabecalho'>
        <div className='Logo'><img src={Logo} alt = "Logo"/></div>
        <div className='titulo1'>Lançamentos</div>
        <div className='line1'><img src={Linha} alt = "Linha1"/></div>
        <div className='titulo2'>Populares</div>
        <div className='line2'><img src={Linha} alt = "Linha2"/></div>
        <div className='titulo3'>Gêneros</div>
        <div className='line3'><img src={Linha} alt = "Linha3"/></div>
        <div className='titulo4'>Promoções</div>
        <div className='line4'><img src={Linha} alt = "Linha4"/></div>
        <form action="http://localhost:5175/" ><button className='titulo5'>Conta</button></form>
        <div className='barraPesquisa'>
          <button className='lupa'><img src={lupa} alt = "lupa"/></button>
          <input className='pesquisa'></input>
        </div>
      </header>
      <div className='main'>
        <div className='cadastro'>

            <div className='títuloCadastro'> Cadastrar Jogo</div> 
            <input className='inputTitulo1' type="input" placeholder='Título do jogo'/>
            <input className='genero1' type="input" placeholder='Gênero'/>
            <input className='descricao1' type = "input" placeholder='Descrição'/>
            <button className = 'botaoInserirImagem'>Inserir imagem</button>
            <button className='botaoCadastrar'>Cadastrar</button>
        </div>

        <div className='remover'> 
            <div className='títuloRemover'>Remover Jogo</div> 
            <input className='inputTitulo2' type="input" placeholder='Título do jogo ou ID'/>
            <button className='botaoRemover' type="input">Remover</button>
            
        </div>

        <div className='editar'>  
        
            <div className='títuloEditar'>Editar Jogo</div> 
            <input className='inputTitulo3' type="input" placeholder='Título do jogo'/>
            <input className='genero3' type="input" placeholder='Gênero'/>
            <input className='descrição2' type = "input" placeholder='Descrição'/>
            <button className='inserirImagem1' type="button">Inserir imagem </button>
            <button className='botaoCadastrar'>Modificar</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
