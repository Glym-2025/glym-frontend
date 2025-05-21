import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// ✅ 기존 글로벌 폰트 리셋은 유지
const FontReset = createGlobalStyle`
  * {
    font-family: inherit !important;
  }
`;

// ✅ HTML <style> 태그로 동적으로 등록하는 방식 (Hook 아님!)
const GlobalFontFace = ({ fontName, fontUrl }) => {
  useEffect(() => {
    if (!fontName || !fontUrl) return;

    const style = document.createElement('style');
    style.setAttribute('data-font', fontName);
    style.innerHTML = `
      @font-face {
        font-family: '${fontName}';
        src: url('${fontUrl}') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [fontName, fontUrl]);

  return null;
};

// ✅ 스타일 적용
const FontContainer = styled.div`
  width: fit-content;
  text-align: center;
  font-family: ${(props) => `'${props.$fontName}', sans-serif`} !important;
  
  margin: 0 auto;
  font-size: 24px;
  color: black;
`;

export default function FontTestDiv({ fontName, fontUrl, content }) {
  return (
    <>
      <FontReset />
      <GlobalFontFace fontName={fontName} fontUrl={fontUrl} />
      <FontContainer $fontName={fontName}>
        {content}
      </FontContainer>
    </>
  );
}
