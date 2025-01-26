const Events = () => {
  const handleMyEvent = () => {
    console.log("Ativado")
  }

  const renderizarCondicional = (x) => {
    if(x) {
      return <h2>Renderizando se for verdadeiro</h2>
    } else {
      return <h2>Renderizando se for falso</h2>
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      {renderizarCondicional(true)}
      {renderizarCondicional(false)}
    </div>
  )
}

export default Events