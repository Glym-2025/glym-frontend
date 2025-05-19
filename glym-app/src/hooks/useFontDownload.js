import { useState } from 'react';
import { get } from '../utils/requests';
import { URLS } from '../constants/urls';

export const useFontDownload = () => {
    const [error, setError] = useState(null);

    const downloadFont = async (font) => {
        try {
            const response = await get({
                baseUrl: URLS.BASE.TEST,
                endpoint: URLS.ENDPOINT.FONT_DOWN,
                data: { fontIds: [font.id] },
                withToken: true,
                withCredentials: false,
            });

            if (!response.ok) {
                throw new Error("폰트 다운로드에 실패했습니다.");
            }

            const downloadInfo = response.data[0];
            const blob = await fetch(downloadInfo.downloadUrl).then(res => res.blob());
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${downloadInfo.fontName}.ttf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            setError(null);
        } catch (error) {
            setError("폰트 다운로드 중 오류가 발생했습니다.");
            console.error("폰트 다운로드 중 오류 발생:", error);
            throw error;
        }
    };

    const downloadMultipleFonts = async (fonts) => {
        if (fonts.length === 0) {
            setError("다운로드할 폰트를 선택해주세요.");
            return;
        }

        try {
            const response = await get({
                baseUrl: URLS.BASE.TEST,
                endpoint: URLS.ENDPOINT.FONT_DOWN,
                data: { fontIds: fonts.map(font => font.id) },
                withToken: true,
                withCredentials: false,
            });

            if (!response.ok) {
                throw new Error("폰트 다운로드에 실패했습니다.");
            }

            // 각 폰트의 다운로드 URL을 사용하여 순차적으로 다운로드
            for (const downloadInfo of response.data) {
                const blob = await fetch(downloadInfo.downloadUrl).then(res => res.blob());
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `${downloadInfo.fontName}.ttf`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }
            setError(null);
        } catch (error) {
            console.error("폰트 다운로드 중 오류 발생:", error);
            throw error;
        }
    };

    return { downloadFont, downloadMultipleFonts, error, setError };
}; 