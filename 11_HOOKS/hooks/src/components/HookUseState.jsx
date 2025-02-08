import { useState } from "react";

const HookUseState = () => {
  // 1 useState
  let userName = "Mario";

  const [name, setName] = useState("José");

  const changeNames = () => {
    userName = "Eduardo";

    setName("André");
  };

  // 2 useState e inputs
  const [age, setAge] = useState(18);

  const handleSubmit = (event) => {
    event.preventDefault();

    // exemplo de envio de dados
    console.log(age);
  };

  return (
    <div>
      {/* 1 - useState */}
      <h2>UseState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes!</button>

      {/* 2 useState e inputs */}
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos</p>

      <hr />
    </div>
  );
};

export default HookUseState;
