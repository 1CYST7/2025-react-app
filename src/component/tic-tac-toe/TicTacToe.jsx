// 引入 React 及 useState 用於管理狀態
import React, { useState } from "react";

// 引入 Board 元件（棋盤）
import Board from "./Board";

// 定義主要的井字遊戲元件
function TicTacToe() {
  // 初始化歷程紀錄（初始棋盤為 9 個 null 的陣列）
  const [history, setHistory] = useState([Array(9).fill(null)]);

  // 當前走到第幾步（也用來判斷歷史紀錄用）
  const [currentMove, setCurrentMove] = useState(0);

  // 判斷目前是否輪到 X（偶數步是 X，奇數步是 O）
  const xIsNext = currentMove % 2 === 0;

  // 取得目前的棋盤狀態
  const currentSquares = history[currentMove];

  // 當下一步下棋完成後的處理函式
  const handlePlay = (nextSquares) => {
    // 只保留到目前的歷程（避免回到過去後還能繼續走）
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    // 更新歷程
    setHistory(nextHistory);

    // 將目前步數設為最新的那一步
    setCurrentMove(nextHistory.length - 1);
  };

  // 跳到某一步的函式（回溯用）
  const jumpTo = (nextMove) => setCurrentMove(nextMove);

  // 建立每一筆歷史紀錄的按鈕清單
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "回到第 " + move + " 步";
    } else {
      description = "遊戲開始";
    }

    // 為每一步建立一個 <li> 包含按鈕
    return (
      <>
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </>
    );
  });

  // 渲染畫面：棋盤 + 歷程紀錄
  return (
    <div className="game">
      {/* 棋盤部分 */}
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>

      {/* 遊戲歷程清單部分 */}
      <div className="game-info">
        <h4>遊戲歷程</h4>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

// 匯出 TicTacToe 元件
export default TicTacToe;
