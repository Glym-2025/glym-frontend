import { useState, useEffect } from 'react';
import { get } from '../utils/requests';
import { URLS } from '../constants/urls';

export const useFontList = () => {
    const [fontList, setFontList] = useState([]);
    const [error, setError] = useState(null);

    const fetchFontList = async () => {
        try {
            const response = await get({
                baseUrl: URLS.BASE.TEST,
                endpoint: URLS.ENDPOINT.FONT_LIST,
                withToken: true,
                withCredentials: false,
            });

            if (response.ok) {
                const processedList = response.data.map((font) => ({
                    id: font.id,
                    fontName: font.fontName,
                    createdAt: formatKoreanDate(font.createdAt),
                    fontUrl: font.fontUrl,
                }));

                setFontList(processedList);
                setError(null);
            } else {
                setError("폰트 목록을 불러오는데 실패했습니다.");
                console.error("폰트 목록 불러오기 실패:", response.status);
            }
        } catch (error) {
            setError("폰트 목록을 불러오는 중 오류가 발생했습니다.");
            console.error("API 호출 중 오류 발생:", error);
        }
    };

    const formatKoreanDate = (isoString) => {
        const date = new Date(isoString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일`;
    };

    useEffect(() => {
        fetchFontList();
    }, []);

    return { fontList, fetchFontList, error, setError };
}; 