import FontListItem from "../features/fontcreation/components/FontListItem";
import { S } from "./style";

export default function FontListPage() {
    return (
        <S.FontListPage.Container>
            <S.FontListPage.Title>서비스 이용 내역</S.FontListPage.Title>
            <hr style={{ width: '850px', margin: 'auto', marginBottom: '30px' }} />
            <S.FontListPage.FontListBox>
                <FontListItem />
                <FontListItem />
                <FontListItem />
                <FontListItem />
                <FontListItem />
                <FontListItem />
                <FontListItem />
            </S.FontListPage.FontListBox>
            <hr style={{ width: '850px', margin: 'auto', marginBottom: '30px' }} />
            <S.FontListPage.ButtonGuideBox>
                <S.FontListPage.GuideText>✨ 삭제하거나 다운로드할 폰트를 선택해주세요.</S.FontListPage.GuideText>
                <div>
                    <S.FontListPage.DeleteButton>삭제</S.FontListPage.DeleteButton>
                    <S.FontListPage.DownloadButton>다운로드</S.FontListPage.DownloadButton>
                </div>
            </S.FontListPage.ButtonGuideBox>
        </S.FontListPage.Container>
    );
}