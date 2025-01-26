// CSS
import "./App.css";
// React
import { useCallback, useEffect, useState } from "react";
// Data
import { wordsList } from "./data/word";
// Components
import StartScreen from "./components/startScreen/StartScreen";
import Game from "./components/game/Game";
import GameOver from "./components/gameOver/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessedNumber = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [selectedWord, setSelectedWord] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guessed, setGuessed] = useState(guessedNumber);
  const [score, setScore] = useState(0);

  const chooseCategoryAndWord = useCallback(() => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  const startGame = () => {
    resetAllStages();
    // Choose the category and word
    const { word, category } = chooseCategoryAndWord();

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setSelectedWord(word);
    setSelectedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  console.log(selectedWord);

  const nextRound = useCallback(() => {
    resetStages();

    const { word, category } = chooseCategoryAndWord();

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setSelectedWord(word);
    setSelectedCategory(category);
    setLetters(wordLetters);
  }, [chooseCategoryAndWord]);

  const checkLetters = (letter) => {
    const normalLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalLetter) ||
      wrongLetters.includes(normalLetter)
    ) {
      return;
    }

    if (letters.includes(normalLetter)) {
      setGuessedLetters((prevLetter) => [...prevLetter, normalLetter]);
    } else {
      setWrongLetters((prevLetter) => [...prevLetter, normalLetter]);

      setGuessed((prevGuessed) => prevGuessed - 1);
    }
  };

  const resetStages = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  const resetAllStages = () => {
    setGuessed(guessedNumber);
    setGuessedLetters([]);
    setWrongLetters([]);
    setScore(0);
    setGameStage(stages[0].name);
  };

  useEffect(() => {
    if (guessed <= 0) {
      resetStages();

      setGameStage(stages[2].name);
    }
  }, [guessed]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length) {
      setScore((prevScore) => (prevScore += 100));

      nextRound();
    }
  }, [guessedLetters, letters, nextRound]);

  const resetGame = () => {
    resetAllStages();
  };

  return (
    <>
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          checkLetters={checkLetters}
          selectedWord={selectedWord}
          selectedCategory={selectedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guessed={guessed}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver resetGame={resetGame} score={score} />}
    </>
  );
}

export default App;
