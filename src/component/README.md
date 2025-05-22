# MyCalculator 計算機元件說明

## 1. 程式架構

本計算機專案採用 React + Vite 架構，所有元件皆以 `My` 為前綴，並採用元件化設計，方便維護與擴充。

```
App.jsx
└── component/
    ├── MyCalculator.jsx      // 主計算機元件，整合所有功能
    ├── MyDisplay.jsx         // 顯示運算式與結果
    ├── MyKeypad.jsx          // 按鈕區，排列所有按鈕
    ├── MyButton.jsx          // 單一按鈕元件，數字/運算子/控制鍵
    ├── MyErrorMessage.jsx    // 顯示錯誤訊息
    └── ... 其他元件
```

## 2. 各元件功能說明

- **MyCalculator**
  - 主元件，負責運算邏輯、狀態管理與整體排版。
  - 整合 MyDisplay、MyKeypad、MyErrorMessage。
  - 處理按鈕點擊、運算式解析、錯誤處理。

- **MyDisplay**
  - 顯示目前輸入的運算式與計算結果。
  - 支援自動換行與美觀排版。

- **MyKeypad**
  - 按鈕區，排列所有數字、運算子、控制鍵。
  - 依照常見計算機排列方式設計。
  - 每個按鈕都呼叫 MyButton。

- **MyButton**
  - 單一按鈕元件。
  - 根據 props 決定顯示內容與配色（數字、運算子、控制鍵不同顏色）。
  - 點擊時呼叫父元件傳入的 onClick。

- **MyErrorMessage**
  - 顯示錯誤訊息（如除以零、運算式錯誤等）。
  - 無錯誤時不顯示。

## 3. 使用技術

- React 19 (Functional Components, Hooks)
- Vite (快速開發與建構工具)
- CSS in JS（元件內嵌樣式）
- 組件化設計，易於擴充與維護
- 支援即時運算、錯誤提示、響應式設計

## 4. 如何使用

1. 將 `MyCalculator` 元件匯入並放入你的 React 專案畫面中：
   ```jsx
   import MyCalculator from "./component/MyCalculator";
   ...
   <MyCalculator />
   ```
2. 按鈕支援滑鼠點擊，運算式與結果即時顯示。
3. 支援加、減、乘、除、清除、刪除、等號等功能。