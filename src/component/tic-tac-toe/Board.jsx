import React from "react";
import Square from "./Square";
import "./tictactoe.css";

function Board() {

  return (
    <>
      <div className="board-row">
        <Square value={0} onSquareClick={() => {}} />
        <Square value={1} onSquareClick={() => {}} />
        <Square value={2} onSquareClick={() => {}} />
      </div>
      <div className="board-row">
        <Square value={3} onSquareClick={() => {}} />
        <Square value={4} onSquareClick={() => {}} />
        <Square value={5} onSquareClick={() => {}} />
      </div>
      <div className="board-row">
        <Square value={6} onSquareClick={() => {}} />
        <Square value={7} onSquareClick={() => {}} />
        <Square value={8} onSquareClick={() => {}} />
      </div>
    </>
  );
}

export default Board;