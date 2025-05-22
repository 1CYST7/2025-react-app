// MyButton 按鈕元件，根據 value 判斷按鈕類型與配色
function MyButton({ value, onClick }) {
    // 判斷是否為運算子（+、-、×、÷、=、C、←）
    const isOperator = ["+", "-", "×", "÷", "=", "C", "←"].includes(value);
    // 判斷是否為控制鍵（C、←、=）
    const isControl = ["C", "←", "="].includes(value);
    // 預設配色：數字鍵
    let bg = "#f0f4ff",
      color = "#222";
    // 運算子鍵配色
    if (isOperator && !isControl) {
      bg = "#ffe0b2"; // 橘色背景
      color = "#b26a00"; // 深橘字
    } else if (isControl) {
      // 控制鍵配色
      bg = "#e1f5fe"; // 淺藍背景
      color = "#0277bd"; // 藍色字
    }
    return (
      <button
        style={{
          width: 60, // 按鈕寬度
          height: 48, // 按鈕高度
          margin: 4, // 按鈕間距
          fontSize: "1.2em", // 字體大小
          borderRadius: 8, // 圓角
          border: "1px solid #888", // 邊框
          background: bg, // 背景色
          color: color, // 字體顏色
          fontWeight: "bold", // 粗體
          boxShadow: "0 1px 4px #0001", // 陰影
          cursor: "pointer", // 滑鼠指標
          transition: "background 0.2s, color 0.2s", // 動畫效果
        }}
        onClick={() => onClick(value)} // 點擊時呼叫父元件傳入的 onClick
      >
        {value}
      </button>
    );
  }
  
  export default MyButton;