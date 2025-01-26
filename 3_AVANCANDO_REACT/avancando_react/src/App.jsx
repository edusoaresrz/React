import { useState } from 'react'
import './App.css'
import Fenix from "./assets/fenix.webp"
import ManipularDados from './components/ManipularDados'
import MostrarNomeUsuario from './components/mostrarNomeUsuario'
import RenderizarCondicional from './components/RenderizarCondicional'
import RenderizarLIsta from './components/RenderizarLIsta'
import DetalhesCarro from './components/DetalhesCarro'
import Container from './components/Container'
import ExibirFuncao from './components/ExibirFuncao'
import Mensagem from './components/Mensagem'
import AlterarMensagem from './components/AlterarMensagem'
import DetalhesUsuario from './components/DetalhesUsuario'

function App() {
  const [nomeUsuario] = useState("Eduardo")

  const carros = [
    {id: 1, marca: "Fiat", km: 0, cor: "Azul", carroNovo: true, ano: 2020},
    {id: 2, marca: "Mercedes", km: 2400, cor: "Preta", carroNovo: false, ano: 2004},
    {id: 3, marca: "Audi", km: 0, cor: "Branco", carroNovo: true, ano: 2025},
    {id: 4, marca: "VW", km: 10000, cor: "Amarelo", carroNovo: false, ano: 2019},
  ]

  function exibirMensagem() {
    console.log("Função do elemento pai")
  }

  const [mensagem, setMensagem] = useState("")

  function alterarMensagem(msg) {
    setMensagem(msg)
  }

  const usuarios = [
    {
      id: 1,
      nome: "Eduardo",
      idade: 22, 
      profissao: "Programador"
    },
    {
      id: 2,
      nome: "Maria",
      idade: 16, 
      profissao: "Estudante"
    },
    {
      id: 3,
      nome: "Pedro",
      idade: 35, 
      profissao: "Engenheiro Elétrico"
    },
    {
      id: 4,
      nome: "Gabriela",
      idade: 15, 
      profissao: "Estudante"
    }
  ]

  return (
    <div>
      <h1>Avavnçando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/paisagem.webp" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={Fenix} alt="Fenix" />
      </div>
      <ManipularDados />
      <RenderizarLIsta />
      <RenderizarCondicional />
      {/* props */}
      <MostrarNomeUsuario nome={nomeUsuario} />
      {/* destructuring */}
      <DetalhesCarro marca="BMW" km={1000} cor="Vermelho" ano={2020}/>
      {/* reaproveitamento */}
      <DetalhesCarro 
        marca="Fiat" km={0} cor="Azul" ano={2024} carroNovo={true}
      />
      <DetalhesCarro 
        marca="VW" km={2400} cor="Branco" ano={2019}
      />
      <DetalhesCarro 
        marca="Mercedes" km={0} cor="Preto" ano={2024} carroNovo={true}
      />
      {/* reutilização em loop */}
      {carros.map((carro) => (
        <DetalhesCarro
          key={carro.id}
          marca={carro.marca}
          km={carro.km}
          cor={carro.cor}
          carroNovo={carro.carroNovo}
          ano={carro.ano}
        />
      ))}
      {/* Children */}
      <Container>
        <p>Esse é o children</p>
      </Container>
      {/* funções como props */}
      <ExibirFuncao minhaFuncao={exibirMensagem}/>
      {/* state lift */}
      <Mensagem msg={mensagem} />
      <AlterarMensagem alterarMsg={alterarMensagem} />
      <div>
        <h1>Tarefa 4</h1>
        {usuarios.map((usuario) => (
          <DetalhesUsuario 
            key={usuario.id}
            nome={usuario.nome}
            idade={usuario.idade}
            profissao={usuario.profissao}
          />
        ))}
      </div>
    </div>
  )
}

export default App
