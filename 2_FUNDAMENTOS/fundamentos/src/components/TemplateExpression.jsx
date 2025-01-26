const TemplateExpression = () => {
  const nome = "Eduardo"
  const dados = {
    idade: 22,
    profissao: "Programador"
  }

  return (
    <div>
      <h1>Olá {nome}, tudo bem?</h1>
      <p>Você tem {dados.idade} e atua como {dados.profissao}</p>
    </div>
  )
}

export default TemplateExpression