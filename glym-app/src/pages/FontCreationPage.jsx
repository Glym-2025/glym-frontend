import React, { useState } from 'react';
import { ImageUploadForm, FontInfoForm } from "../features/fontcreation";
import { ErrorModal } from "../shared/components/ErrorModal";
import { LoadingModal } from "../shared/components/LoadingModal";
import { S } from "./style";
import { useFontUpload } from '../hooks/useFontUpload';

export default function FontCreationPage() {
    const { uploadFont, errorModal, modalTitle, loadingModal, setErrorModal, setModalTitle } = useFontUpload();
    const [imageData, setImageData] = useState(null);
    const [fontName, setFontName] = useState('');

    const handleImageUpload = (image) => {
        setImageData(image);
    };

    const handleFontNameChange = (name) => {
        setFontName(name);
    };

    const handleSubmit = async () => {
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

        await uploadFont(imageData, fontName);
    };

    return (
        <>
            {loadingModal && <LoadingModal title="AI가 폰트 생성중" subTitle="폰트를 생성 중입니다... 잠시만 기다려주세요." />}
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