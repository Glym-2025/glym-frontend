import React, { useState, useEffect } from 'react';
import { S } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import ReactQuill from 'react-quill-new';
import 'quill/dist/quill.snow.css';
import fontImage from '../shared/FONT_RESULT.png'

export default function FontCreationCompletePage() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { fontUrl, fontName } = location.state || {};
    const [downloadError, setDownloadError] = useState(null);

    const handlePageChange = () => {
        navigate("/fontcreation");
    };

    useEffect(() => {
        const downloadFont = async () => {
            if (fontUrl && fontName) {
                try {
                    console.log(`Starting download for font: ${fontName} from ${fontUrl}`);

                    const token = sessionStorage.getItem("accessToken");
                    const response = await fetch(fontUrl, {
                        headers: token
                            ? {
                                authorization: `${token}`,
                            }
                            : {},
                    });

                    if (!response.ok) {
                        throw new Error(`Failed to fetch font: ${response.statusText}`);
                    }

                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${fontName}.ttf`; // 또는 적절한 파일 확장자
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);

                    setDownloadError(null); // 다운로드 성공 시 에러 초기화
                    console.log("Font download successful.");
                } catch (error) {
                    console.error("Font download error:", error);
                    setDownloadError("폰트 다운로드에 실패했습니다.");
                }
            }
        };

        downloadFont();
    }, [fontUrl, fontName]);


    return (
        <S.FontCreationCompletePage.Container>
            <S.FontCreationCompletePage.TitleBox>
                <S.FontCreationCompletePage.Title>✨나만의 폰트가 완성되었어요!✨</S.FontCreationCompletePage.Title>
                <S.FontCreationCompletePage.SubTitle>자동으로 다운로드가 시작됩니다.</S.FontCreationCompletePage.SubTitle>
            </S.FontCreationCompletePage.TitleBox>
            <S.FontCreationCompletePage.FontBox>
                <S.FontCreationCompletePage.FontResultImage src={fontImage}></S.FontCreationCompletePage.FontResultImage>
                <S.FontCreationCompletePage.NewFontButton onClick={handlePageChange}>새로운 폰트 생성하러 가기</S.FontCreationCompletePage.NewFontButton>
            </S.FontCreationCompletePage.FontBox>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                style={{ width: '1000px', height: '200px', margin: 'auto', marginTop: '30px', background: '#FFFFFF' }}
            />
        </S.FontCreationCompletePage.Container>
    );
}