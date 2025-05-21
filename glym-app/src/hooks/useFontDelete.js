import { useState } from 'react';
import { del } from '../utils/requests';
import { URLS } from '../constants/urls';

export const useFontDelete = () => {
    const [error, setError] = useState(null);

    const deleteFonts = async (fontIds) => {
        if (fontIds.length === 0) {
            setError("삭제할 폰트를 선택해주세요.");
            return false;
        }

        try {
            const response = await del({
                baseUrl: URLS.BASE.TEST,
                endpoint: URLS.ENDPOINT.FONT_DEL,
                data: { fontIds },
                withToken: true,
                withCredentials: false,
            });

            if (response.ok) {
                setError(null);
                return true;
            } else {
                setError("폰트 삭제에 실패했습니다.");
                return false;
            }
        } catch (error) {
            console.error("폰트 삭제 중 오류 발생:", error);
            setError("폰트 삭제 중 오류가 발생했습니다.");
            return false;
        }
    };

    return { deleteFonts, error, setError };
}; 