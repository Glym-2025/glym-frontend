// hooks/useFontCreationStatus.js
import { useState, useEffect } from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { URLS } from '../constants/urls';

export const useFontCreationStatus = (jobId, token) => {
    const [status, setStatus] = useState('IDLE');
    const [fontUrl, setFontUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!jobId || !token) {
            setStatus('IDLE');
            setFontUrl(null);
            setError(null);
            return;
        }

        const url = `${URLS.BASE.TEST}${URLS.ENDPOINT.FONT_STATUS.replace('{jobId}', jobId)}`;

        const eventSource = new EventSourcePolyfill(url, {
            headers: {
                authorization: `${token}`,
            },
            heartbeatTimeout: 60000, // optional: 서버에서 ping을 안 보내도 연결 유지
            withCredentials: false,
        });

        eventSource.onmessage = (event) => {
            try {
                console.log("SSE event data:", event.data);
                const data = JSON.parse(event.data);

                setStatus(data.status);
                console.log("📦 폰트 상태 업데이트:", data.status);

                if (data.status === 'COMPLETED') {
                    setFontUrl(data.fontUrl);
                    eventSource.close();
                } else if (data.status === 'FAILED') {
                    setError(data.errorMessage);
                    eventSource.close();
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

        return () => {
            eventSource.close();
        };
    }, [jobId, token]);

    return { status, fontUrl, error };
};
