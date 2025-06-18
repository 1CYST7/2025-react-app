// 引入 React 套件
import React from "react";

// 引入子元件 Square（單一格子）
import Square from "./Square";

// 引入對應的 CSS 樣式
import './tictactoe.css';

// 定義 Board 元件，接收三個 props：xIsNext（誰的回合）、squares（棋盤狀態）、onPlay（點擊格子的處理函式）
function Board({ xIsNext, squares, onPlay }) {

  // 處理玩家點擊格子的函式
  const handleClick = (i) => {
    // 若已有勝利者或該格已被下過子，就不做任何動作
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // 複製當前棋盤狀態
    const nextSquares = squares.slice();

    // 根據目前是 X 還是 O 的回合，更新對應格子的值
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    // 通知父層更新棋盤狀態
    onPlay(nextSquares);
  };

  // 計算是否有人勝出
  function calculateWinner(squares) {
    // 定義所有可能的勝利線（橫列、直列、對角線）
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // 檢查每一條線是否三格相同且不為空
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // 回傳勝利者 "X" 或 "O"
      }
    }

    return null; // 沒有勝者時回傳 null
  }

  // 計算目前的勝利者
  const winner = calculateWinner(squares);

  // 根據是否有勝利者顯示狀態文字
  let status;
  if (winner) {
    status = "贏家 " + winner;
  } else {
    status = "下一個玩家: " + (xIsNext ? "X" : "O");
  }

  // JSX 畫面回傳：顯示狀態與 3x3 棋盤格子
  return (
    <>
      {/* 顯示目前遊戲狀態（誰贏了或輪到誰） */}
      <div className="status">{status}</div>

      {/* 棋盤第一列 */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      {/* 棋盤第二列 */}
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      {/* 棋盤第三列 */}
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// 匯出 Board 元件，讓其他元件可使用它
export default Board;
