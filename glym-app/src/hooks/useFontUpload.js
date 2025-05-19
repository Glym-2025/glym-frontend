import { useState } from 'react';
import { URLS } from '../constants/urls';
// import { useNavigate } from "react-router-dom"; // useNavigate 제거
import { post } from '../utils/requests';

export const useFontUpload = () => {
    // const navigate = useNavigate(); // useNavigate 제거
    const [errorModal, setErrorModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [loadingModal, setLoadingModal] = useState(false);
    const token = sessionStorage.getItem('accessToken');

    const uploadFont = async (imageData, fontName) => {
        const formData = new FormData();
        formData.append('handWritingImage', imageData);
        formData.append('fontName', fontName);

        console.log(formData);

        try {
            setLoadingModal(true);
            const response = await fetch(`${URLS.BASE.TEST}${URLS.ENDPOINT.FONT_UPLOAD}`, {
                method: 'POST',
                body: formData,
                credentials: 'include',
                headers: {
                    'authorization': `${token}`
                }
            });

            if (!response.ok) {
                throw new Error('폰트 업로드에 실패했습니다.');
            }

            const data = await response.json();
            console.log('Upload success:', data);
            return data; // 응답 데이터 반환
        } catch (error) {
            console.error('Upload error:', error);
            // navigate("/fontcreationcomplete"); // 지워야 함!!!!!
            // setErrorModal(true);
            // setModalTitle(error.message);
            setLoadingModal(false); // 에러 발생 시 로딩 종료
            return null;
        } finally {
            // 여기서 loadingModal을 닫지 않고, 상태 스트리밍 완료 후 닫도록 변경
        }
    };

    return {
        uploadFont,
        errorModal,
        modalTitle,
        loadingModal,
        setErrorModal,
        setModalTitle,
        setLoadingModal // FontCreationPage에서 로딩 상태를 제어할 수 있도록 추가
    };
};
