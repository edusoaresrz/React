const DetalhesCarro = ({marca, km, cor, ano, carroNovo}) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {marca}</li>
        <li>Km: {km}</li>
        <li>Cor: {cor}</li>
        <li>Ano: {ano}</li>
      </ul>
      {carroNovo && <p>Este carro é novo</p> }
    </div>
  )
}


export default DetalhesCarro