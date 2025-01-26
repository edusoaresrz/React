const DetalhesUsuario = ({nome, idade, profissao}) => {
  
  return (
    <div>
      <h2>{nome}</h2>
      <p>{idade} anos</p>
      <p>{profissao}</p>
      {idade >= 18 ? (
        <p>Pode tirar careteira</p>
      ) : (
        <p>Menor de idade</p>
      )}
    </div>
  )
}

export default DetalhesUsuario