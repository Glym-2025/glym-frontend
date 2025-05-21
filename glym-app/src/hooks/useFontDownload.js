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
                withToken: true,
                withCredentials: false,
            });

            if (!response.ok) {
                throw new Error("폰트 다운로드에 실패했습니다.");
            }

            const downloadInfo = response.data[0];
            const token = sessionStorage.getItem("accessToken");

            const blob = await fetch(downloadInfo.downloadUrl, {
                headers: {
                    Authorization: `${token}`,
                }
            }).then(res => {
                if (!res.ok) {
                    throw new Error("파일을 가져오는 데 실패했습니다.");
                }
                return res.blob();
            });

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

    return { downloadFont, error, setError };
}; 