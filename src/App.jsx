// 引入 useState Hook，用來管理元件內的狀態
import { useState } from "react";

// 引入圖片資源（React 與 Vite 的 logo）
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// 引入整體的 CSS 樣式
import "./App.css";

// 引入自定義元件（Slider、RGB面板、計算機、井字遊戲）
import MySlider from "./component/rgb-panel/MySlider";
import MyPanel from "./component/rgb-panel/MyPanel";
import MyCalculator from "./component/calculator/MyCalculator";
import TicTacToe from "./component/tic-tac-toe/TicTacToe";

// 定義主元件 App
function App() {
  // 建立一個狀態 count，初始值為 0
  const [count, setCount] = useState(0);

  // 返回畫面內容（JSX）
  return (
    <>
      {/* 顯示 logo，並附上連結到官網 */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* 主標題（你的學號與姓名） */}
      <h1>5b1g0020胡芊杏</h1>

      {/* 區塊一：MySlider 元件 */}
      <h2>我的第一個元件：Slider</h2>
      <div>
        <p>
          R:
          <MySlider />
        </p>
        <p>
          G:
          <MySlider />
        </p>
        <p>
          B:
          <MySlider />
        </p>
      </div>

      <br />

      {/* 區塊二：色彩面板 */}
      <h2>第二個元件：RGB色彩面板</h2>
      <MyPanel />

      {/* 區塊三：計算機 */}
      <h2>第三個元件:計算機</h2>
      <MyCalculator />

      {/* 區塊四：井字遊戲 */}
      <h2>第四個元件:井字遊戲</h2>
      <TicTacToe />

      {/* 顯示一個按鈕，點擊會讓 count +1 */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* 額外提示文字，教學用途 */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

// 匯出 App 元件（讓 index.jsx 使用）
export default App;
