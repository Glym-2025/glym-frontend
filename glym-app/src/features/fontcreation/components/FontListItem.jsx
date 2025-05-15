import TTFLogo from "../../../shared/TTFLogo.png";
import { S } from "../style";

export default function FontListItem({ className, name, onClick, selected }) {
    const handleFontDownload = () => {
        console.log("폰트 다운로드");
    };

    return (
        <S.FontListItem.FontItemContainer
            className={className}
            selected={selected}
            onClick={onClick}
        >
            <S.FontListItem.DownloadButton onClick={e => { e.stopPropagation(); handleFontDownload(); }}>
                <img src={TTFLogo} alt="다운로드" />
            </S.FontListItem.DownloadButton>

            <S.FontListItem.FontBox>
                <S.FontListItem.FontInfoBox>
                    <S.FontListItem.FontTitle>{name || "_ByGlym 폰트"}</S.FontListItem.FontTitle>
                    <S.FontListItem.FontDate>2025년 3월 25일</S.FontListItem.FontDate>
                </S.FontListItem.FontInfoBox>

                <S.FontListItem.FontPreviewBox>
                    GLYM delivers your dreams, one letter at a time.
                </S.FontListItem.FontPreviewBox>
            </S.FontListItem.FontBox>
        </S.FontListItem.FontItemContainer>
    );
}