import { useState } from "react";
import { S } from "../style";
import fileLogo from "../../../shared/FILE_LOGO.png";
import { ErrorModal } from "../../../shared/components/ErrorModal";

export default function ImageUploadForm({ onImageUpload }) {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [error, setError] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) {
            return;
        }

        // 서버에서 이미지 검사할 예정
        setFile(selectedFile);

        const url = URL.createObjectURL(selectedFile);
        setPreviewUrl(url);

        // 부모 컴포넌트로 이미지 데이터 전달
        onImageUpload(selectedFile);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);

        const selectedFile = e.dataTransfer.files[0];
        if (!selectedFile) {
            return;
        }

        // 서버에서 이미지 검사할 예정

        // 파일 형식 png 인지 검사
        if (selectedFile && selectedFile.type === "image/png" && selectedFile.name.endsWith(".png")) {
            const url = URL.createObjectURL(selectedFile);
            setPreviewUrl(url);
        } else if (!selectedFile.type) {
            setError(true);
            return;
        } else {
            setError(true);
            return;
        }
        setFile(selectedFile);

        const url = URL.createObjectURL(selectedFile);
        setPreviewUrl(url);

        // 부모 컴포넌트로 이미지 데이터 전달
        onImageUpload(selectedFile);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    return (
        <S.ImageUploadForm.Container>
            {error && <ErrorModal
                title="해당 파일은 지원하지 않습니다."
                subTitle="PNG 파일만 업로드할 수 있습니다."
                onClose={() => { setError(false); }}
            />}
            <input
                type="file"
                accept="image/png"
                style={{ display: "none" }}
                onChange={handleFileChange}
                id="file-upload"
            />
            {file ?
                (
                    <S.ImageUploadForm.DropBox>
                        <S.ImageUploadForm.ImagePreviewBox
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                            onDragLeave={handleDragLeave}
                            style={{ backgroundColor: isDragOver && "#efefef", borderRadius: "10px" }}
                        >
                            {previewUrl && <img src={previewUrl} alt="preview" style={{ maxWidth: "90%", maxHeight: "70%", height: "auto" }} />}
                        </S.ImageUploadForm.ImagePreviewBox>

                        <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p style={{ marginTop: "10px" }}>{file.name}</p>
                            <S.ImageUploadForm.SelectButton style={{ width: "150px" }} onClick={() => document.getElementById('file-upload').click()}>다른 파일 선택</S.ImageUploadForm.SelectButton>
                        </div>
                    </S.ImageUploadForm.DropBox>
                ) :
                (
                    <S.ImageUploadForm.DropBox
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onDragLeave={handleDragLeave}
                        style={{ backgroundColor: isDragOver && "#efefef", borderRadius: "10px" }}
                    >
                        <img src={fileLogo} alt="dropBox" style={{ width: "80px", height: "80px", marginBottom: "30px" }} />
                        여기에 파일을 드롭하세요!
                        <S.ImageUploadForm.SelectButton onClick={() => document.getElementById('file-upload').click()}>파일 선택</S.ImageUploadForm.SelectButton>
                    </S.ImageUploadForm.DropBox>
                )}
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