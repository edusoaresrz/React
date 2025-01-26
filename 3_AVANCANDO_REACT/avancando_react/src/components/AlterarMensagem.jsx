const AlterarMensagem = ({alterarMsg}) => {
  const mensagens = ["Olá", "Oi", "Eai, tudo bem?"]

  return (
    <div>
      <button onClick={() => alterarMsg(mensagens[0])}>1</button>
      <button onClick={() => alterarMsg(mensagens[1])}>2</button>
      <button onClick={() => alterarMsg(mensagens[2])}>3</button>
    </div>
  )
}

export default AlterarMensagem