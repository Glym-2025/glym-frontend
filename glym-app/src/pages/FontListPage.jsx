import FontListItem from "../features/fontcreation/components/FontListItem";
import React, { useState } from "react";
import { S } from "./style";
import { URLS } from "../constants/urls";
import { del } from "../utils/requests";
import { useFontList } from "../hooks/useFontList";
import { useFontSelection } from "../hooks/useFontSelection";
import { useFontDownload } from "../hooks/useFontDownload";
import { useFontDelete } from "../hooks/useFontDelete";
import { ErrorModal } from "../shared/components/ErrorModal";

export default function FontListPage() {
    const { fontList, fetchFontList, error: listError, setError: setListError } = useFontList();
    const { selectedIds, handleSelect, clearSelection } = useFontSelection();
    const { downloadMultipleFonts, error: downloadError, setError: setDownloadError } = useFontDownload();
    const { deleteFonts, error: deleteError, setError: setDeleteError } = useFontDelete();

    const handleDelete = async () => {
        const success = await deleteFonts(selectedIds);
        if (success) {
            clearSelection();
            fetchFontList();
        }
    };

    const handleDownload = async () => {
        try {
            const selectedFonts = fontList.filter(font => selectedIds.includes(font.id));
            await downloadMultipleFonts(selectedFonts);
        } catch (error) {
            setDownloadError(error.message || "폰트 다운로드 중 오류가 발생했습니다.");
        }
    };

    const handleCloseError = () => {
        setListError(null);
        setDownloadError(null);
        setDeleteError(null);
    };

    return (
        <S.FontListPage.Container>
            <S.FontListPage.Title>서비스 이용 내역</S.FontListPage.Title>
            <hr style={{ width: '850px', margin: 'auto', marginBottom: '30px' }} />
            <S.FontListPage.FontListBox>
                {fontList.length === 0 ? (
                    <div style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', color:'#929292' }}>
                        폰트 내역이 존재하지 않습니다.
                    </div>
                ) : (
                    fontList.map((item) => (
                        <FontListItem
                            key={item.id}
                            name={item.fontName}
                            selected={selectedIds.includes(item.id)}
                            onClick={() => handleSelect(item.id)}
                        />
                    ))
                )}
            </S.FontListPage.FontListBox>
            <hr style={{ width: '850px', margin: 'auto', marginBottom: '30px' }} />
            <S.FontListPage.ButtonGuideBox>
                <S.FontListPage.GuideText>✨ 삭제하거나 다운로드할 폰트를 선택해주세요.</S.FontListPage.GuideText>
                <div>
                    <S.FontListPage.DeleteButton onClick={handleDelete}>삭제</S.FontListPage.DeleteButton>
                    <S.FontListPage.DownloadButton onClick={handleDownload}>다운로드</S.FontListPage.DownloadButton>
                </div>
            </S.FontListPage.ButtonGuideBox>

            {(listError || downloadError || deleteError) && (
                <ErrorModal
                    title={listError || downloadError || deleteError}
                    onClose={handleCloseError}
                />
            )}
        </S.FontListPage.Container>
    );
}