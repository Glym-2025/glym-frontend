import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  }

  body {
    background-color: #F5F5F5;
  }
`;

export default GlobalStyle;