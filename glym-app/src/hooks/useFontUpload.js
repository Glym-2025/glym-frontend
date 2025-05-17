import { useState } from 'react';
import { URLS } from '../constants/urls';
import { useNavigate } from "react-router-dom";
import { post } from '../utils/requests';

export const useFontUpload = () => {
    const navigate = useNavigate();
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
                    'Authorization': `${token}`
                }
            });

            if (!response.ok) {
                throw new Error('폰트 업로드에 실패했습니다.');
            }

            const data = await response.json();
            console.log('Upload success:', data);
            navigate("/fontcreationcomplete"); // 지워야 함!!!!! 
            return data;
        } catch (error) {
            console.error('Upload error:', error);
            navigate("/fontcreationcomplete"); // 지워야 함!!!!! 
            // setErrorModal(true);
            // setModalTitle(error.message);
            return null;
        } finally {
            setLoadingModal(false);
        }
    };

    return {
        uploadFont,
        errorModal,
        modalTitle,
        loadingModal,
        setErrorModal,
        setModalTitle
    };
};
