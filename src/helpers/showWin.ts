import { BoardType } from "../types/types";
import { initialBoard } from "../consts/consts";
import checkWin from "./checkWin";

const showWin = (board: BoardType, setBoard: (board: BoardType) => void) => {
  const winner = checkWin(board);

  if (winner === 'X') {
    alert('Unfortunately you lose');
    setBoard(initialBoard);
    return true;
  } else if ((winner === 'O')) {
    alert('Congratulation! You win!');
    setBoard(initialBoard);
    return true;
  }
}

export default showWin;
