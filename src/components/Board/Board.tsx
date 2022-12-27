import React, { useState } from 'react';
import cloneDeep from "lodash.clonedeep";

import { computerMove, showWin } from "../../helpers";
import { BoardType } from "../../types/types";
import './Board.css';

export const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const Board: React.FC = () => {
  const [board, setBoard] = useState<BoardType>(initialBoard);

  const handleClick = (row: number, col: number) => {
    if (board[row][col] !== null) {
      return;
    }

    const newBoard = cloneDeep(board);
    newBoard[row][col] = 'O';
    setBoard(newBoard);
    if (showWin(newBoard, setBoard)) {
      return;
    }

    computerMove(newBoard, setBoard);
  };

  return (
    <div className="board">
      {board.map((rows, rowIndex) => (
        <div key={rowIndex}>
          {rows.map((value, colIndex) => (
            <div
              key={colIndex}
              className={value ?? ''}
              onClick={() => handleClick(rowIndex, colIndex)}
            >
              {value ?? ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
