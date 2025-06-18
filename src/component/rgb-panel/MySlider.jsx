// 從 React 中引入 useState，用於管理元件內部狀態
import { useState } from "react";

// 引入這個元件所使用的 CSS 樣式
import "./MySlider.css";

// 定義函式型元件 MySlider，接收 props：value（數值）與 onChange（變動處理函式）
function MySlider({ value, onChange }) {
  // 如果父層沒給定 value 和 onChange，就會使用這個內部狀態來管理滑桿值（非受控元件）
  const [internalValue, setInternalValue] = useState(128);

  // 判斷是否為「受控元件」（即父層有傳入 value 和 onChange）
  const isControlled = value !== undefined && onChange !== undefined;

  // 根據是否為受控元件，決定要顯示的值（來自 props 或來自內部 state）
  const displayValue = isControlled ? value : internalValue;

  // 當使用者調整滑桿時觸發
  const handleChange = (e) => {
    const newValue = Number(e.target.value); // 取得滑桿的新值，轉成數字
    if (isControlled) {
      onChange(newValue); // 如果是受控元件，呼叫外部的 onChange 更新父層狀態
    } else {
      setInternalValue(newValue); // 否則自己更新自己的 internalValue
    }
  };

  // 渲染部分：一個滑桿加上目前數值
  return (
    <>
      <input
        type="range"        // 輸入型態是滑桿
        min="0"             // 最小值為 0
        max="255"           // 最大值為 255（對應 RGB 的範圍）
        value={displayValue} // 滑桿的值由 displayValue 決定
        onChange={handleChange} // 當滑桿改變時呼叫 handleChange
      />
      <span>{displayValue}</span> {/* 顯示目前的數值 */}
    </>
  );
}

// 匯出元件，供其他檔案使用
export default MySlider;
