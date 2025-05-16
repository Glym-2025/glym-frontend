import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  }

  body {
    background-color:rgb(255, 255, 255);
  }
  
  .ql-container, .ql-editor {
    background: #fff !important;
  }
`;

export default GlobalStyle;