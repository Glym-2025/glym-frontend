import { useState, useEffect } from 'react';
import { URLS } from '../constants/urls';

export const useFontLoader = (fontId) => {
    const [fontUrl, setFontUrl] = useState("");
    const [fontName, setFontName] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadFont = async () => {
            try {
                setIsLoading(true);
                const token = sessionStorage.getItem("accessToken");
                const response = await fetch(`${URLS.BASE.TEST}${URLS.ENDPOINT.FONT_DOWN}/${fontId}`, {
                    headers: {
                        authorization: token
                    }
                });

                if (!response.ok) {
                    throw new Error('폰트 정보를 가져오는데 실패했습니다.');
                }

                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                // 폰트 이름 추출
                const contentDisposition = response.headers.get('content-disposition');
                const fileName = contentDisposition?.split('filename="')[1]?.replace('"', '') || 'font.ttf';
                const extractedFontName = fileName.replace('.ttf', '');

                // @font-face 스타일 생성 및 적용
                const style = document.createElement('style');
                style.textContent = `
                    @font-face {
                        font-family: '${extractedFontName}';
                        src: url('${url}') format('truetype');
                        font-weight: normal;
                        font-style: normal;
                    }
                `;
                document.head.appendChild(style);

                setFontUrl(url);
                setFontName(extractedFontName);
                setError("");
                console.log("✅ 폰트 적용 성공:", extractedFontName);
            } catch (error) {
                console.error("❌ 폰트 로딩 오류:", error);
                setError("폰트를 불러오는데 실패했습니다.");
            } finally {
                setIsLoading(false);
            }
        };

        if (fontId) {
            loadFont();
        }

        return () => {
            // cleanup: URL 객체 해제
            if (fontUrl) {
                window.URL.revokeObjectURL(fontUrl);
            }
        };
    }, [fontId]);

    return { fontUrl, fontName, error, isLoading };
}; 
