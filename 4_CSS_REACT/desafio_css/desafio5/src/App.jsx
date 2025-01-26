import './App.css'
import DetalhesCarros from './components/DetalhesCarros'

function App() {
  const carros = [
    {id: 1, marca: "Ferrari", cor: "Vermelho", ano: 2012, km: 35000, novo: false},
    {id: 2, marca: "Mercedes", cor: "Preto", ano: 2024, km: 0, novo: true},
    {id: 3, marca: "VW", cor: "Branco", ano: 1990, km: 400000, novo: false}
  ]

  return (
    <>
      <h1>Desafio dos carros</h1>
      {carros.map((carro) => (
        <DetalhesCarros key={carro.id} carro={carro}/>
      ))}
    </>
  )
}

export default App
