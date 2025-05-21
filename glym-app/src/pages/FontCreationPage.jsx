import React, { useState, useEffect } from 'react';
import { ImageUploadForm, FontInfoForm } from "../features/fontcreation";
import { ErrorModal } from "../shared/components/ErrorModal";
import { LoadingModal } from "../shared/components/LoadingModal";
import { S } from "./style";
import { useFontUpload } from '../hooks/useFontUpload';
import { useFontCreationStatus } from '../hooks/useFontCreationStatus';
import { useNavigate } from "react-router-dom";

export default function FontCreationPage() {
    const token = sessionStorage.getItem('accessToken');
    const navigate = useNavigate();
    const { uploadFont, loadingModal: uploadLoading, errorModal: uploadErrorModal, modalTitle: uploadModalTitle, setErrorModal: setUploadErrorModal, setModalTitle: setUploadModalTitle, setLoadingModal: setUploadLoading } = useFontUpload();
    
    const [imageData, setImageData] = useState(null);
    const [fontName, setFontName] = useState('');
    const [jobId, setJobId] = useState(null);

    const { status: creationStatus, fontId, fontUrl, error: creationError } = useFontCreationStatus(jobId, token);

    useEffect(() => {
        if (creationStatus === 'COMPLETED') {
            setUploadLoading(false);
            navigate("/fontcreationcomplete", { state: { fontId: fontId, fontUrl: fontUrl, fontName: fontName } });
        } else if (creationStatus === 'FAILED') {
            setUploadLoading(false);
            setUploadErrorModal(true);
            setUploadModalTitle(creationError || "폰트 생성 중 알 수 없는 오류가 발생했습니다.");
        }
        if (creationError) {
             setUploadLoading(false);
             setUploadErrorModal(true);
             setUploadModalTitle(creationError);
        }

    }, [creationStatus, creationError, navigate, setUploadLoading, setUploadErrorModal, setUploadModalTitle, fontUrl, fontName]);

    const handleImageUpload = (image) => {
        setImageData(image);
    };

    const handleFontNameChange = (name) => {
        setFontName(name);
    };

    const handleSubmit = async () => {
        if (!imageData) {
            setUploadErrorModal(true);
            setUploadModalTitle("이미지를 추가해주세요.");
            return;
        }

        if (!fontName) {
            setUploadErrorModal(true);
            setUploadModalTitle("폰트명을 작성해주세요.");
            return;
        }

        const result = await uploadFont(imageData, fontName);
        if (result && result.jobId) {
            setJobId(result.jobId);
        } else if (uploadErrorModal) {
            
        } else {
             setUploadErrorModal(true);
             setUploadModalTitle(uploadModalTitle || "폰트 업로드 중 오류가 발생했습니다.");
        }
    };

    const isLoading = uploadLoading || (jobId && creationStatus === 'PROGRESSING');
    const isError = uploadErrorModal || !!creationError;
    const currentErrorTitle = uploadModalTitle || creationError;

    return (
        <>
            {isLoading && <LoadingModal title="AI가 폰트 생성중" subTitle="폰트를 생성 중입니다... 잠시만 기다려주세요." />}
            {isError && <ErrorModal title={currentErrorTitle} onClose={() => { setUploadErrorModal(false); setJobId(null); }} />}
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