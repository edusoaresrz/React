import "./StartScreen.css";
import PropTypes from "prop-types";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão para começar a jogar</p>
      <button onClick={startGame}>Começar a jogar</button>
    </div>
  );
};

StartScreen.propTypes = {
  startGame: PropTypes.func,
};

export default StartScreen;
