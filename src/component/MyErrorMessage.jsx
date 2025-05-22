// MyErrorMessage 錯誤訊息元件，顯示運算錯誤等提示
function MyErrorMessage({ error }) {
    if (!error) return null; // 無錯誤時不顯示
    return (
      <div style={{ color: "#c00", marginTop: 8, minHeight: 24, textAlign: "center" }}>
        {error}
      </div>
    );
  }
  
  export default MyErrorMessage;