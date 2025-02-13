import { useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previuosValue = usePrevious(number);

  return (
    <div>
      <h2>Custom hook</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previuosValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar</button>
      <hr />
    </div>
  );
};

export default HookCustom;
