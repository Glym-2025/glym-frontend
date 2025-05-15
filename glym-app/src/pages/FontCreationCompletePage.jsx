import React, { useState } from 'react';
import FontListItem from '../features/fontcreation/components/FontListItem';

export default function FontCreationCompletePage() {
    return (
        <>
            <div>
                <h1>✨나만의 폰트가 완성되었어요!✨</h1>
                <p>자동으로 다운로드가 시작됩니다.</p>
            </div>
            <div>
                <FontListItem />
                <p>새로운 폰트 생성하러 가기</p>
            </div>
        </>
    );
}