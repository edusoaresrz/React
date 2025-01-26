import "./GameOver.css";
import PropTypes from "prop-types";

const GameOver = ({ resetGame, score }) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>
        Sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={resetGame}>Voltar a página inicial</button>
    </div>
  );
};

GameOver.propTypes = {
  resetGame: PropTypes.func,
  score: PropTypes.number,
};

export default GameOver;
