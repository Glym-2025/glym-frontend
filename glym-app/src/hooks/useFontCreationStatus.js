import { useState, useEffect } from 'react';
import { URLS } from '../constants/urls';

export const useFontCreationStatus = (jobId) => {
    const [status, setStatus] = useState('IDLE');
    const [fontUrl, setFontUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!jobId) {
            setStatus('IDLE');
            setFontUrl(null);
            setError(null);
            return;
        }

        // jobld를 사용하여 SSE 연결 설정
        const eventSource = new EventSource(`${URLS.BASE.TEST}${URLS.ENDPOINT.FONT_STATUS.replace('{jobId}', jobId)}`);

        eventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                setStatus(data.status);

                if (data.status === 'COMPLETED') {
                    setFontUrl(data.fontUrl);
                    eventSource.close(); // 작업 완료 시 연결 종료
                } else if (data.status === 'FAILED') {
                    setError(data.errorMessage);
                    eventSource.close(); // 작업 실패 시 연결 종료
                }
            } catch (e) {
                setError("스트리밍 데이터 처리 중 오류가 발생했습니다.");
                console.error("SSE message parsing error:", e);
                eventSource.close();
            }
        };

        eventSource.onerror = (err) => {
            console.error("SSE connection error:", err);
            setError("폰트 생성 상태 스트리밍 연결 중 오류가 발생했습니다.");
            eventSource.close();
        };

        // 컴포넌트 언마운트 시 연결 종료
        return () => {
            eventSource.close();
        };

    }, [jobId]); // jobId가 변경될 때마다 훅 다시 실행

    return { status, fontUrl, error };
}; 