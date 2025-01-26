import { useState } from "react"

const RenderizarCondicional = () => {
  const [x] = useState(false)

  const [nome] = useState("Eduardo")

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {/* Renderização condicional simples */}
      {x && <p>Se x for verdadeiro, sim</p> }
      {!x && <p>Agora x é falso</p>}
      <h1>If ternário</h1>
      {nome === "Eduardo" ? (
        <p>O nome é Eduardo</p>
      ) : (
        <p>Nome não encontrado</p>
      )}
    </div>
    
  )
}

export default RenderizarCondicional