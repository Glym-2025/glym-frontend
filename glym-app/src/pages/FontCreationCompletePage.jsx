import React, { useState, useEffect } from 'react';
import { S } from "./style";
import { useNavigate, useLocation } from "react-router-dom";

export default function FontCreationCompletePage() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { fontId, fontUrl, fontName } = location.state || {};
    const [downloadError, setDownloadError] = useState(null);

    const handlePageChange = () => {
        navigate("/fontcreation");
    };

    useEffect(() => {

        if (fontUrl && fontName) {
            try {
                console.log(`🚀 자동 다운로드 시작: ${fontName} (${fontUrl})`);

                const a = document.createElement('a');
                a.href = fontUrl;
                a.download = `${fontName}.ttf`; // 확장자 필요 없으면 생략 가능
                a.style.display = 'none';

                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                setDownloadError(null); // 에러 초기화
                console.log("✅ 폰트 다운로드 성공!");
            } catch (error) {
                console.error("❌ 자동 다운로드 오류:", error);
                setDownloadError("폰트 다운로드에 실패했습니다.");
            }
        }
    }, [fontUrl, fontName]);

    return (
        <S.FontCreationCompletePage.Container>
            <S.FontCreationCompletePage.TitleBox>
                <S.FontCreationCompletePage.Title>✨나만의 폰트가 완성되었어요!✨</S.FontCreationCompletePage.Title>
                <S.FontCreationCompletePage.SubTitle>자동으로 다운로드가 시작됩니다.</S.FontCreationCompletePage.SubTitle>
            </S.FontCreationCompletePage.TitleBox>
            <S.FontCreationCompletePage.FontBox>
                <S.FontCreationCompletePage.FontResult fontId={fontId} />
                <S.FontCreationCompletePage.NewFontButton onClick={handlePageChange}>새로운 폰트 생성하러 가기</S.FontCreationCompletePage.NewFontButton>
            </S.FontCreationCompletePage.FontBox>
        </S.FontCreationCompletePage.Container>
    );
}