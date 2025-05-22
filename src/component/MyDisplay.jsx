// MyDisplay 顯示元件，負責顯示運算式與計算結果
function MyDisplay({ expression, result }) {
    return (
      <div style={{
        background: "#222", // 背景色
        color: "#fff", // 字體顏色
        borderRadius: "8px", // 圓角
        padding: "16px", // 內距
        minHeight: "48px", // 最小高度
        marginBottom: "12px", // 下方間距
        textAlign: "right", // 右對齊
        fontSize: "1.5em", // 字體大小
        wordBreak: "break-all" // 自動換行
      }}>
        {/* 顯示運算式 */}
        <div style={{ opacity: 0.7, fontSize: "1em" }}>{expression || 0}</div>
        {/* 顯示結果 */}
        <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>{result !== "" ? result : ""}</div>
      </div>
    );
  }
  
  export default MyDisplay;