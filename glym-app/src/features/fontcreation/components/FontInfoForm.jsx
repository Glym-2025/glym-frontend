import { S } from "../style";

export default function FontInfoForm() {
    return (
        <S.FontInfoForm.Container>
            <div style={{padding: "30px"}}>
                <p style={{marginBottom: "15px", color: "#222222"}}>폰트명</p>
                <S.FontInfoForm.InputBox>
                    <S.FontInfoForm.Input type="text" />
                    <S.FontInfoForm.CheckButton>확인</S.FontInfoForm.CheckButton>
                </S.FontInfoForm.InputBox>
                <p style={{marginLeft: "10px", fontSize: "12px", color: "#F43C71"}}>✨ 사용 가능한 폰트명입니다.</p>
            </div>

            <S.FontInfoForm.GuideBox>
                <S.FontInfoForm.GuideTitle>폰트명 작성 안내</S.FontInfoForm.GuideTitle>
                <S.FontInfoForm.Ul>
                    <li>- 영문(알파벳 A–Z, a–z) 으로 작성해야 합니다.</li>
                    <li>- 숫자(0~9)는 영문과 함께 사용 가능합니다.</li>
                    <li>- 띄어쓰기 및 특수문자는 사용 불가능합니다.</li>
                    <li>- '폰트명 + ByGlym.ttf'로 생성됩니다.</li>
                </S.FontInfoForm.Ul>
            </S.FontInfoForm.GuideBox>

            <S.FontInfoForm.GuideBox>
                <S.FontInfoForm.GuideTitle>저작권 안내</S.FontInfoForm.GuideTitle>
                <S.FontInfoForm.Ul>
                    <li>- 사용자가 저작권을 소유합니다.</li>
                    <li>- 단, 제작에 사용된 요소(예: 기존 글꼴, 이미지, 코드 등)에 타인의 저작물이 포함된 경우, 그에 대한 저작권 침해 책임은 제작자 본인에게 있습니다.</li>
                    <li>- 배포시 폰트명에 'ByGlym'이 포함되어야 합니다.</li>
                </S.FontInfoForm.Ul>
            </S.FontInfoForm.GuideBox>

            <S.FontInfoForm.GuideBox>
                <S.FontInfoForm.GuideTitle>상업적 이용 안내</S.FontInfoForm.GuideTitle>
                <S.FontInfoForm.Ul>
                    <li>- 제작한 폰트는 라이센스에 맞게 상업적 목적으로 이용할 수 있습니다.</li>
                </S.FontInfoForm.Ul>
            </S.FontInfoForm.GuideBox>
        </S.FontInfoForm.Container>
    );
}