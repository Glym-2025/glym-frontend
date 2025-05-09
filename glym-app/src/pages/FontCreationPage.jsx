import React, { useState } from 'react';
import { ImageUploadForm, FontInfoForm } from "../features/fontcreation";
import { ErrorModal } from "../shared/components/ErrorModal";
import { S } from "./style";

export default function FontCreationPage() {
    const [errorModal, setErrorModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [imageData, setImageData] = useState(null);
    const [fontName, setFontName] = useState('');

    const handleImageUpload = (image) => {
        setImageData(image);
    };

    const handleFontNameChange = (name) => {
        setFontName(name);
    };

    const handleSubmit = () => {
        if (!imageData) {
            setErrorModal(true);
            setModalTitle("이미지를 추가해주세요.");
            return;
        }

        if (!fontName) {
            setErrorModal(true);
            setModalTitle("폰트명을 작성해주세요.");
            return;
        }

        // 서버로 데이터 전송 로직 추가
        console.log('Image Data:', imageData);
        console.log('Font Name:', fontName);
    };

    return (
        <>
            {errorModal && <ErrorModal title={modalTitle} onClose={() => setErrorModal(false)} />}
            <div style={{ paddingTop: "100px", display: "flex", justifyContent: "center", gap: "30px" }}>
                <ImageUploadForm onImageUpload={handleImageUpload} />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                    <FontInfoForm onFontNameChange={handleFontNameChange} />
                    <S.FontCreationPage.Button onClick={handleSubmit}>폰트생성하기</S.FontCreationPage.Button>
                </div>
            </div>
        </>
    );
}