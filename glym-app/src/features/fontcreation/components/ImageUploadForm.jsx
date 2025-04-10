import { S } from "../style";
import fileLogo from "../../../shared/FILE_LOGO.png";

export default function ImageUploadForm() {
    return (
        <S.ImageUploadForm.Container>
            <S.ImageUploadForm.DropBox>
                <img src={fileLogo} alt="dropBox" style={{ width: "80px", height: "80px", marginBottom: "30px" }} />
                여기에 파일을 드롭하세요!
                <S.ImageUploadForm.SelectButton>파일 선택</S.ImageUploadForm.SelectButton>
            </S.ImageUploadForm.DropBox>
            <S.ImageUploadForm.GuideBox>
                <p style={{ marginBottom: "10px", color: "#6B6B6B" }}>업로드 시 주의할 점</p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>- 배경이 너무 어둡거나 패턴이 있으면 안 됩니다.</li>
                    <li>- 너무 흐릿한 글씨나 연한 회색 계열은 인식이 어려울 수 있습니다.</li>
                    <li>- 아래 문장으로 작성된 이미지여야 합니다.</li>
                    <li>- “The quick brown fox jumps over the lazy dog.”</li>
                    <li>- 파일 형식은 PNG만 지원합니다.</li>
                    <li>- 압축 파일(.zip)은 업로드할 수 없습니다.</li>
                </ul>
            </S.ImageUploadForm.GuideBox>
        </S.ImageUploadForm.Container>
    );
}