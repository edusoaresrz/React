import { useState } from "react"

const ManipularDados = () => {
  const [numero, setNumero] = useState(10)

  return (
    <div>
      <div>Valor: {numero}</div>
      <button onClick={() => setNumero(15)}>Mudar state</button>
    </div>
  )
}

export default ManipularDados