// 從 React 中引入 useState，用於定義狀態
import { useState } from "react";

// 引入自訂元件 MySlider（應該是滑桿控制元件）
import MySlider from "./MySlider";

// 定義一個函式型元件 MyPanel
function MyPanel() {
  // 宣告 r, g, b 三個狀態值，分別代表紅、綠、藍色的數值，初始值都是 128
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);

  // 回傳要渲染的 JSX 元素
  return (
    <div
      style={{
        border: "2px solid #888",           // 灰色邊框
        borderRadius: "16px",               // 邊角圓弧
        padding: "24px",                    // 內距
        maxWidth: "320px",                  // 最大寬度
        margin: "32px auto",                // 上下外距32，自動水平置中
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",  // 輕微陰影
        textAlign: "center"                 // 文字置中
      }}
    >
      {/* 顯示紅色控制滑桿 */}
      <div style={{ marginBottom: "20px" }}>
        R: <MySlider value={r} onChange={setR} />
      </div>

      {/* 顯示綠色控制滑桿 */}
      <div style={{ marginBottom: "20px" }}>
        G: <MySlider value={g} onChange={setG} />
      </div>

      {/* 顯示藍色控制滑桿 */}
      <div style={{ marginBottom: "20px" }}>
        B: <MySlider value={b} onChange={setB} />
      </div>

      {/* 顯示背景顏色的區塊，顏色由 r, g, b 三個值決定 */}
      <div
        style={{
          width: "200px",                       // 寬度 200px
          height: "100px",                      // 高度 100px
          backgroundColor: `rgb(${r},${g},${b})`, // 設定背景色為目前 RGB 值
          border: "2px solid #333",             // 深色邊框
          margin: "16px auto",                  // 上下間距 16，自動水平置中
          borderRadius: "12px"                  // 圓角
        }}
      />

      {/* 顯示目前 RGB 數值 */}
      <div>RGB({r}, {g}, {b})</div>
    </div>
  );
}

// 匯出元件 MyPanel，供其他地方使用
export default MyPanel;
