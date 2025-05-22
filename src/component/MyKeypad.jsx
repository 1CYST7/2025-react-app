// MyKeypad 按鈕區元件，排列所有數字、運算子、控制鍵
import MyButton from "./MyButton";

// 按鈕排列設定
const btns = [
  ["7", "8", "9", "÷"],
  ["4", "5", "6", "×"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"],
  ["C", "←"]
];

function MyKeypad({ onButtonClick }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* 依照 btns 陣列動態產生每一列按鈕 */}
      {btns.map((row, i) => (
        <div key={i} style={{ display: "flex" }}>
          {row.map((val) => (
            // 每個按鈕都呼叫 MyButton
            <MyButton key={val} value={val} onClick={onButtonClick} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MyKeypad;