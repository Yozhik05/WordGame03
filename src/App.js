import "./styles.css";
import { WORDS } from "./constants";
import WordContainer from "./components/WordContainer";
import { useState, useEffect } from "react";

import WordChangeHandler from "./components/WordChangeHandler";

export default function App() {
  const [chosenWord, setChosenWord] = useState("");
  const [guess, setGuess] = useState(false);

  useEffect(() => {
    const wordFromStorage = localStorage.getItem("chosenWord");

    if (wordFromStorage) {
      setChosenWord(wordFromStorage);
    }
  }, []);
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  function wordChangeHandler() {
    setChosenWord((prev) => {
      const newValue = Math.floor(getRandomNumber(0, WORDS.length - 1));
      localStorage.setItem("chosenWord", newValue);
      return newValue;
    });
  }
  function shuffleArray(array) {
    const result = JSON.parse(JSON.stringify(array));
    for (var i = result.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    console.log("qw");
    return result;
  }
  const ArrayWord = chosenWord && shuffleArray(Array.from(WORDS[chosenWord]));

  return (
    <>
      <div className="App">
        {guess ? (
          <h1>Правильно</h1>
        ) : (
          <>
            {chosenWord ? <WordContainer word={ArrayWord} /> : ""}

            <WordChangeHandler chosenWord={chosenWord} fn={wordChangeHandler} />
          </>
        )}
      </div>
    </>
  );
}
