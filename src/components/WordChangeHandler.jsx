import { Button } from "@mui/material";

function WordChangeHandler({ chosenWord, fn }) {
  return <Button onClick={fn}>{chosenWord ? "Поменять" : "Добавить"}</Button>;
}

export default WordChangeHandler;
