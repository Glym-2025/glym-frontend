export default function ImageUploadForm() {
    return (
        <div>
            <div>
                <p>여기에 파일을 드롭하세요!</p>
                <button>파일 선택</button>
            </div>
            <div>
                <ul>
                    업로드 시 주의할 점
                    <li>- 배경이 너무 어둡거나 패턴이 있으면 안 됩니다.</li>
                    <li>- 너무 흐릿한 글씨나 연한 회색 계열은 인식이 어려울 수 있습니다.</li>
                    <li>- 아래 문장으로 작성된 이미지여야 합니다.</li>
                    <li>- “The quick brown fox jumps over the lazy dog.”</li>
                    <li>- 파일 형식은 PNG만 지원합니다.</li>
                    <li>- 압축 파일(.zip)은 업로드할 수 없습니다.</li>
                </ul>
            </div>
        </div>
    );
}