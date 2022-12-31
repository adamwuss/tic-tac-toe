import styled from "styled-components";

const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  max-height: 600px;
  width: 100vw;
  height: 100vw;
`;

const TileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 33%;
  height: 33%;
`;

const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ children }) => children === "O" ? "Red" : "cadetblue"};
  
  &:hover {
    background-color: #111;
  }
`;

export default {
  Board,
  TileWrapper,
  Tile,
};
