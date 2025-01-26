import style from "./DetalhesCarros.module.css"

const DetalhesCarros = ({carro}) => {
  return (
    <div className={style.container_detalhes}>
      <h2 className={style.titulo_descricao}>
        Detalhes do carro {carro.marca}
      </h2>
      <ul>
        <li>Cor: {carro.cor}</li>
        <li>Ano de fabricação: {carro.ano}</li>
        <li>Quilômetros rodados: {carro.km}km</li>
        {carro.novo ? (
          <li>Esté carro é novo</li>
        ) : (
          <li>Esté carro é usado</li>
        )}
      </ul>
    </div>
  )
}

export default DetalhesCarros