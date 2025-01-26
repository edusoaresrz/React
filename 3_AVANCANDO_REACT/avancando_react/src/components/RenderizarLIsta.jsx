import {useState} from 'react'

const RenderizarLIsta = () => {
  const [listaNomes] =useState(["Eduardo", "Caio", "Maria", "José"])

  const [usuarios, setUsuarios] = useState([
    {id: 1, nome: "Eduardo", idade: 22},
    {id: 2, nome: "Maria", idade: 18},
    {id: 3, nome: "Claudinei", idade: 45},
    {id: 4, nome: "Mário", idade: 32},    
  ])

  const deletarAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 5)

    setUsuarios((prevUsuarios) => {
      console.log(usuarios)
      return prevUsuarios.filter(usuario => numeroAleatorio !== usuario.id)
    })
  }

  return (
    <div>
       {/* Má prática */}
      <div>
        <ul>{listaNomes.map((nome, index) => (
          <li key={index}>{nome}</li>
          ))}
        </ul>
      </div>
       {/*Boa pratica*/}
       <div>
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.nome} - {usuario.idade}</li>
          ))}
        </ul>
       </div>
       <button onClick={deletarAleatorio}>Deletar usuario aleatório</button>
    </div>
  )
}

export default RenderizarLIsta