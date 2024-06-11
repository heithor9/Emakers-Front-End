import { useState } from 'react'
import './App.css'
import Linha from "./imgs/Line 1.png"
import Logo from "./imgs/Logo.png"
import Lapis from "./imgs/Lapis.png"
import bob from "./imgs/bobEsponja.png"
import deliverUs from "./imgs/deliverUs.png"
import gow from "./imgs/gow.png"
import deathStranding from "./imgs/deathStranding.png"
import lixeira from "./imgs/Lixeira.png"
import lupa from "./imgs/LupaCerta.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
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
        <div className='titulo5'>Conta</div>
        <div className='barraPesquisa'>
          <button className='lupa'><img src={lupa} alt = "lupa"/></button>
          <input className='pesquisa'></input>
        </div>
      </header>
      <div className='corpo'>
        <div className='quadrante1'>
          <div className='escritos1'>
            <div className='quadrante11'>Olá, (nome do usuário  ) </div>
            <div className='quadrante12'>Seu email é nomeusuario@email.com</div>
            <div className='quadrante13'>Seu CPF é 123.456.789-00</div>
            <div className='quadrante14'>
              <div className='quadrante141'>Alterar Dados</div>
              <div className='pencil'><img src={Lapis} alt = "Lapis"/> </div>
            </div>
            <div className='quadrante15'>
              <div className='quadrante142'>Excluir Conta</div>
              <div className='lixeira'><img src={lixeira} alt = "lixeira"/></div>
            </div>
            <div className='quadrante16'>Tela do admin</div>
          </div>
        </div>
        <div className='quadrante2'>
          <div className='jogos'>
          <div className='titulo'>Jogos adquiridos:</div>
          <div className='bob'><img src={bob} alt = "bob"/></div>
          <div className='deliverUs'><img src={deliverUs} alt = "deliverUs"/></div>
          <div className='gow'><img src={gow} alt = "gow"/></div>
          <div className='deathStranding'><img src={deathStranding} alt = "deathStranding"/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
