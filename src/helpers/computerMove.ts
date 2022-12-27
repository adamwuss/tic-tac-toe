import cloneDeep from "lodash.clonedeep";

import { BoardType } from "../types/types";
import checkWin from "./checkWin";
import showWin from "./showWin";

const computerMove = (board: BoardType, setBoard: (board: BoardType) => void): void => {
  // check one can win
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === null) {
        const newBoard = cloneDeep(board);
        newBoard[row][col] = 'X';
        if (checkWin(newBoard) === 'X') {
          setBoard(newBoard);
          showWin(newBoard, setBoard);
          return;
        }
      }
    }
  }

  // check O can win
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === null) {
        const newBoard = cloneDeep(board);
        newBoard[row][col] = 'O';
        if (checkWin(newBoard) === 'O') {
          newBoard[row][col] = 'X';
          setBoard(newBoard);
          showWin(newBoard, setBoard);
          return;
        }
      }
    }
  }

  // check middle
    if (board[1][1] === null) {
      const newBoard = cloneDeep(board);
      newBoard[1][1] = 'X';
      setBoard(newBoard);
      showWin(newBoard, setBoard);
      return;
    }


  // looking for first free field
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === null) {
        const newBoard = cloneDeep(board);
        newBoard[row][col] = 'X';
        setBoard(newBoard);
        showWin(newBoard, setBoard);
        return;
      }
    }
  }
};

export default computerMove;
