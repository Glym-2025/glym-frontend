import { ImageUploadForm, FontInfoForm } from "../features/fontcreation";
import { S } from "./style";

export default function FontCreationPage() {
    return (
        <div style={{ paddingTop: "100px", display: "flex", justifyContent: "center", gap: "30px" }}>
            <ImageUploadForm />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                <FontInfoForm />
                <S.FontCreationPage.Button>폰트생성하기</S.FontCreationPage.Button>
            </div>
        </div>
    );
}