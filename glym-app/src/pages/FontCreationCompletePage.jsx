import React, { useState } from 'react';
import { S } from "./style";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill-new';
import 'quill/dist/quill.snow.css';

export default function FontCreationCompletePage() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handlePageChange = () => {
        navigate("/fontcreation");
    };

    return (
        <S.FontCreationCompletePage.Container>
            <S.FontCreationCompletePage.TitleBox>
                <S.FontCreationCompletePage.Title>✨나만의 폰트가 완성되었어요!✨</S.FontCreationCompletePage.Title>
                <S.FontCreationCompletePage.SubTitle>자동으로 다운로드가 시작됩니다.</S.FontCreationCompletePage.SubTitle>
            </S.FontCreationCompletePage.TitleBox>
            <S.FontCreationCompletePage.FontBox>
                <S.FontCreationCompletePage.CustomFontListItem />
                <S.FontCreationCompletePage.NewFontButton onClick={handlePageChange}>새로운 폰트 생성하러 가기</S.FontCreationCompletePage.NewFontButton>
            </S.FontCreationCompletePage.FontBox>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                style={{ width: '1000px', height: '400px', margin: 'auto', marginTop: '30px' }}
            />
        </S.FontCreationCompletePage.Container>
    );
}