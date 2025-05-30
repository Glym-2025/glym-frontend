import { useState } from 'react';
import { post } from '../utils/requests';
import { URLS } from '../constants/urls';

export const useFontDownload = () => {
    const [error, setError] = useState(null);

    const downloadFont = async (fontIds) => {
        try {
            const response = await post({
                baseUrl: URLS.BASE.TEST,
                endpoint: URLS.ENDPOINT.FONT_DOWN,
                data: { fontIds },
                withToken: true, // 다운로드 URL 요청 시에는 토큰이 필요하다면 유지
                withCredentials: false,
            });

            if (!response.ok) {
                throw new Error("폰트 다운로드에 실패했습니다.");
            }

            for (const font of response.data) {
                try {
                    const a = document.createElement('a');
                    a.href = font.downloadUrl;
                    a.download = `${font.fontName}.ttf`; // 또는 그냥 빈 문자열로도 가능
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                } catch (err) {
                    console.error(`"${font.fontName}" 다운로드 중 오류 발생:`, err);
                }
            }
            setError(null);
        } catch (error) {
            setError("폰트 다운로드 중 오류가 발생했습니다.");
            console.error("폰트 다운로드 중 오류 발생:", error);
            throw error;
        }
    };

    return { downloadFont, error, setError };
};
