import { useState, useEffect } from "react";
import "./App.css";

const WORD_LENGTH = 5;

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState<string[]>(Array(6).fill(""));
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    const handleAddWord = (e: KeyboardEvent) => {
      const isAlphabet = e.key.length == 1 && /^[a-zA-Z]$/.test(e.key);
      if (!isAlphabet && e.key !== "Enter" && e.key !== "Backspace") {
        return;
      }
      if (isGameOver) return;

      if (e.key === "Enter") {
        if (currentGuess.length !== 5) {
          return;
        }
        let isGuessCorrect =
          solution.toLowerCase() === currentGuess.toLowerCase();
        if (isGuessCorrect) setIsGameOver(true);

        const newGuesses = [...guesses];
        newGuesses[newGuesses.findIndex((guess) => guess === "")] =
          currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");
      }
      if (e.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }
      if (currentGuess.length >= 5) return;

      setCurrentGuess((prev) => prev + e.key);
    };

    window.addEventListener("keydown", handleAddWord);

    return () => {
      window.removeEventListener("keydown", handleAddWord);
    };
  }, [currentGuess, isGameOver, solution]);

  const handleReset = () => {
    setGuesses(Array(6).fill(""));
    setCurrentGuess("");
    setIsGameOver(false);
  };

  useEffect(() => {
    const fetchWord = async () => {
      // dummy data for now
      const words = [
        "ALBUM",
        "HINGE",
        "MONEY",
        "SCRAP",
        "GAMER",
        "GLASS",
        "SCOUR",
        "BEING",
        "DELVE",
        "YIELD",
        "METAL",
        "TIPSY",
        "SLUNG",
        "FARCE",
      ];
      setSolution(words[Math.floor(Math.random() * words?.length)])
    };
    fetchWord();
  }, []);
  return (
    <>
      <div className="success">
        <h1>WORDLE</h1>
        {isGameOver ? (
          <>
            <div>YOU WIN !</div>
            <div>Correct Answer: {solution}</div>
            <button type="button" className="tryagain" onClick={handleReset}>
              Try Again
            </button>
          </>
        ) : guesses.every((guess) => guess !== "") ? (
          <>
            <div>HARD LUCK !</div>
            <div>Correct Answer: {solution}</div>
            <button type="button" className="tryagain" onClick={handleReset}>
              Try Again
            </button>
          </>
        ) : null}
      </div>
      <div className="board">
        {guesses &&
          guesses?.map((guess, indx) => {
            const isCurrentGuess =
              indx === guesses.findIndex((guess) => guess === "");
            return (
              <Line
                guess={isCurrentGuess ? currentGuess : guess}
                isFinal={!isCurrentGuess && guess !== ""}
                solution={solution}
                key={indx}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;

interface LineProps {
  guess: string;
  isFinal: boolean;
  solution: string;
}
export const Line = ({ guess, isFinal, solution }: LineProps) => {
  const tiles: any = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    let tileClass = "tile";
    if (isFinal) {
      if (guess[i].toLowerCase() === solution[i].toLowerCase()) {
        tileClass += " correct";
      } else if (solution.includes(guess[i].toUpperCase())) {
        tileClass += " exists";
      } else tileClass += " incorrect";
    }
    tiles.push(
      <div key={i} className={tileClass}>
        {guess[i]}
      </div>,
    );
  }

  return <div className="line">{tiles}</div>;
};
