import './App.css'
import MeuComponente from './components/MeuComponente'
import Titulo from './components/Titulo'

function App() {
  const n = 15

  const classeDinamica = true

  return (
    <>
      {/* CSS global */}
      <h1>CSS no React</h1>
      <p>Paragrafo do App.jsx</p>

      {/* CSS no componente */}
      <MeuComponente />

      {/* CSS inline */}
      <p style={{
        color: "magenta",
        padding: "1rem",
        borderTop: "1px solid red"
      }}>Parágrafo com css inline</p>

      {/* Inline dinâmico */}
      <h2 style={
        n < 10 ? ({color: "purple"}) : ({color: "pink"})
      }>Inline dinâmico
      </h2>
      <h2 style={
        n > 10 ? ({color: "purple"}) : ({color: "pink"})
      }>Inline dinâmico</h2>

      {/* classe dinâmica */}
      <h2 className={classeDinamica ? "titulo-modificado" : "titulo"}>
        Este título tem uma classe dinâmica
      </h2>

      {/* css modules */}
      <Titulo />
    </>
  )
}

export default App
