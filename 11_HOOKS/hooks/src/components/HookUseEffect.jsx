import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect sem dependências
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de dependência vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez!");
  }, []);

  // 3 - item no array de deps.
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executando apenas quando o anotherNumber muda");
    }
  }, [anotherNumber]);

  // 4 - clearnup
  useEffect(() => {
    // const time = setTimeout(() => {
    //   console.log("Hello Word");
    // }, 2000);
    // // função de clearnup
    // return () => clearTimeout(time);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Numero: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>AnotherNumber: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
