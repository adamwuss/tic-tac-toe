import React, { useState } from "react";
import cloneDeep from "lodash.clonedeep";

import { computerMove, showWin } from "../../helpers";
import { BoardType } from "../../types/types";
import { initialBoard } from "../../consts/consts";
import Styled from "./Board.styled";

const Board: React.FC = () => {
  const [board, setBoard] = useState<BoardType>(initialBoard);

  const handleClick = (row: number, col: number) => {
    if (board[row][col] !== null) {
      return;
    }

    const newBoard = cloneDeep(board);
    newBoard[row][col] = "O";
    setBoard(newBoard);
    if (showWin(newBoard)) {
      return;
    }

    setTimeout(() => {
      computerMove(newBoard, setBoard);
    }, 100);
  };

  return (
    <Styled.Board>
      {board.map((rows, rowIndex) => (
        <Styled.TileWrapper key={rowIndex}>
          {rows.map((value, colIndex) => (
            <Styled.Tile
              key={colIndex}
              onClick={() => handleClick(rowIndex, colIndex)}
            >
              {value ?? ""}
            </Styled.Tile>
          ))}
        </Styled.TileWrapper>
      ))}
    </Styled.Board>
  );
};

export default Board;
