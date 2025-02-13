import { useState, useEffect } from "react";

import PropTypes from "prop-types";

const List = ({ getItens }) => {
  const [myItens, setMyItens] = useState([]);

  useEffect(() => {
    console.log("Buscando itens do DB...");

    setMyItens(getItens);
  }, [getItens]);

  return (
    <div>{myItens && myItens.map((item) => <p key={item}>{item}</p>)}</div>
  );
};

List.propTypes = {
  getItens: PropTypes.array,
};

export default List;
