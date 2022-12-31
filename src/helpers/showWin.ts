import { BoardType } from "../types/types";
import checkWin from "./checkWin";

const showWin = (board: BoardType) => {
  const winner = checkWin(board);

  if (winner === "X") {
    alert("Unfortunately you lose");
    return true;
  } else if ((winner === "O")) {
    alert("Congratulation! You win!");
    return true;
  }
};

export default showWin;
