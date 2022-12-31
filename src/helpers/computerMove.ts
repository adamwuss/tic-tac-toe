import cloneDeep from "lodash.clonedeep";

import { BoardType } from "../types/types";
import checkWin from "./checkWin";
import showWin from "./showWin";

const computerMove = (board: BoardType, setBoard: (board: BoardType) => void): void => {
  // check X can win
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === null) {
        const newBoard = cloneDeep(board);
        newBoard[row][col] = "X";
        if (checkWin(newBoard) === "X") {
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
        newBoard[row][col] = "O";
        if (checkWin(newBoard) === "O") {
          console.log("test");
          newBoard[row][col] = "X";
          setBoard(newBoard);
          showWin(newBoard, setBoard);
          return;
        }
      }
    }
  }

  // check middle combination
  if (board[0][0] === "X" && board[1][1] === "O" && board[2][2] === "O") {
    const newBoard = cloneDeep(board);
    if (board[0][2] === null) {
      newBoard[0][2] = "X";
      setBoard(newBoard);
      showWin(newBoard, setBoard);
      return;
    }
  }

  // check corner combination
  if (board[1][1] === "X" && board[2][0] === "O" && board[0][2] === "O") {
    const newBoard = cloneDeep(board);
    if (board[0][1] === null) {
      newBoard[0][1] = "X";
      setBoard(newBoard);
      showWin(newBoard, setBoard);
      return;
    }
  }

  // check middle
    if (board[1][1] === null) {
      const newBoard = cloneDeep(board);
      newBoard[1][1] = "X";
      setBoard(newBoard);
      showWin(newBoard, setBoard);
      return;
    }


  // looking for first free field
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === null) {
        const newBoard = cloneDeep(board);
        newBoard[row][col] = "X";
        setBoard(newBoard);
        showWin(newBoard, setBoard);
        return;
      }
    }
  }
};

export default computerMove;
