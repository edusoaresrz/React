const Challenge = () => {
  const valor1 = 10
  const valor2 = 25

  return (
    <div>
      <h1>Valores de referência: {valor1}, {valor2}</h1>
      <button onClick={() => console.log(valor1 + valor2)}>Clique para ver a soma</button>
    </div>
  )
}

export default Challenge
