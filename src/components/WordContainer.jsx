import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Ceil from "./Ceil";

export default function WordContainer({ word }) {
  const [changeWord, setChangeWord] = useState([]);
  const [focusedCell, setFocusedCell] = useState();
  useEffect(() => {
    setChangeWord(word);
  }, [changeWord]);

  return (
    <>
      <Box sx={{ display: "flex", transition: "all 1s" }}>
        {changeWord.map((char, index) => (
          <Ceil
            onClick={() => {
              if (focusedCell && focusedCell - 1 !== index) {
                console.log();
                setChangeWord((prev) => {
                  const a = prev[focusedCell - 1];
                  prev[focusedCell - 1] = prev[index];
                  prev[index] = a;
                  return prev;
                });
                setFocusedCell();
              } else {
                setFocusedCell(index + 1);
              }
            }}
            focused={focusedCell - 1 === index}
            key={index}
            char={char}
          />
        ))}
      </Box>
    </>
  );
}
