import { useEffect } from 'react';

/**
 * 커스텀 웹폰트를 전역 스타일에 동적으로 등록합니다.
 * @param fontName 적용할 폰트 이름
 * @param fontUrl .ttf 폰트의 URL
 */
const useCustomFont = (fontName, fontUrl) => {
    useEffect(() => {
        if (!fontName || !fontUrl) return;

        // 이미 등록된 폰트인지 확인
        const existingFont = document.getElementById(`font-${fontName}`);
        if (existingFont) return;

        const style = document.createElement('style');
        style.id = `font-${fontName}`;
        style.innerHTML = `
      @font-face {
        font-family: '${fontName}';
        src: url('${fontUrl}') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
      .ql-editor {
        font-family: '${fontName}', sans-serif;
      }
    `;
        document.head.appendChild(style);
    }, [fontName, fontUrl]);
};

export default useCustomFont;
