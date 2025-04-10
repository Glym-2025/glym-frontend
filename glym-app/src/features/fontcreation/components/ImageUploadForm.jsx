import styled from "styled-components";
import fileLogo from "../../../shared/FILE_LOGO.png";
import { font } from "../../../styles/font";

const Container = styled.div`
    width: 800px;
    height: 800px;

    border-radius: 10px;
    border: 1px solid #D9D9D9;
    background-color: #FFFFFF;
`;

const DropBox = styled.div`
    width: 100%;
    height: 72%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${font(18, 400, 1.5)}
    color: #929292;
`;

const FileSelectButton = styled.button`
    width: 180px;
    height: 40px;

    margin-top: 15px;

    border-radius: 10px;
    border: none;

    ${font(18, 400, 1.5)}
    color: #FFFFFF;
    background-color: #94C7FE;
`;

const ImageGuideBox = styled.div`
    width: 100%;
    height: 28%;

    text-align: left;
    padding: 30px;
    border-top: 1px solid #D9D9D9;
    color: #929292;

    ${font(18, 400, 1.2)}
`;

export default function ImageUploadForm() {
    return (
        <Container>
            <DropBox>
                <img src={fileLogo} alt="dropBox" style={{ width: "80px", height: "80px", marginBottom: "30px" }} />
                여기에 파일을 드롭하세요!
                <FileSelectButton>파일 선택</FileSelectButton>
            </DropBox>
            <ImageGuideBox>
                <p style={{ marginBottom: "10px", color: "#6B6B6B" }}>업로드 시 주의할 점</p>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>- 배경이 너무 어둡거나 패턴이 있으면 안 됩니다.</li>
                    <li>- 너무 흐릿한 글씨나 연한 회색 계열은 인식이 어려울 수 있습니다.</li>
                    <li>- 아래 문장으로 작성된 이미지여야 합니다.</li>
                    <li>- “The quick brown fox jumps over the lazy dog.”</li>
                    <li>- 파일 형식은 PNG만 지원합니다.</li>
                    <li>- 압축 파일(.zip)은 업로드할 수 없습니다.</li>
                </ul>
            </ImageGuideBox>
        </Container>
    );
}