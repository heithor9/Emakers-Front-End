import { useState } from 'react'
import './App.css'; 

function App() {
  return (
    <div>
      <header className='header'>
        <div className='imagem'></div>
        <div className='links'>
          <div className = 'link1'> Lançamentos |</div>
          <div className= 'link2'> Populares |</div>
          <div className= 'link3'> Gêneros |</div>
          <div className= 'link4'> Promoções |</div>
          <div className= 'link5'> Conta </div>
        </div>
      </header>
      <div className='main'>
        <div className='cadastro'>
          <div className='conteudo1'>
            <div className='títuloCadastro'> Cadastrar Jogo</div> 
            <input className='inputTitulo1' type="input" placeholder='Título do jogo'/>
            <input className='genero1' type="input" placeholder='Gênero'/>
            <input className='descrição1' type = "input" placeholder='Descrição'/>
            <input className='inserirImagem1' type="bottom" placeholder='Inserir Imagem'/>
          </div>
        </div>

        <div className='remover'> 
          <div className='conteudo2'>
            <div className='títuloRemover'>Remover Jogo</div> 
            <input className='inputTitulo2' type="input" placeholder='Título do jogo ou ID'/>
            <input className='genero2' type="input" placeholder='Remover'/>
            
          </div>
        </div>

        <div className='editar'>  
          <div className='conteudo3'>
            <div className='títuloEditar'>Editar Jogo</div> 
            <input className='inputTitulo3' type="input" placeholder='Título do jogo'/>
            <input className='genero3' type="input" placeholder='Gênero'/>
            <input className='inserirImagem1' type="input" placeholder='Remover'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
