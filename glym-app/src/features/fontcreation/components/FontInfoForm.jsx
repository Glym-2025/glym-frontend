import styled from "styled-components";
import { font } from "../../../styles/font";

const FontInfoFormContainer = styled.div`
    width: 380px;
    height: 690px;
    box-sizing: border-box;

    border: 1px solid #D9D9D9;
    border-radius: 10px;
    background-color: #FFFFFF;

    ${font(18, 400, 1.5)}
    color: #929292;
`;

const InputBox = styled.div`
    display: flex;
    gap: 15px;

    margin: 15px 0 8px 0;
`;

const Input = styled.input`
    width: 240px;
    height: 50px;
    
    padding: 15px;

    border: 1px solid #929292;
    border-radius: 10px;

    ${font(18, 400, 1.5)}
    color: #929292;
    &:focus {
        outline: none;
        border: 1px solid #F43C71;
    }
`;

const CheckButton = styled.button`
    width: 65px;
    height: 50px;
    
    text-align: center;

    border-radius: 10px;
    border: 1px solid #F43C71;

    ${font(18, 400, 1.5)}
    color: #F43C71;
    background-color: #FFFFFF;

    &:hover {
        background-color: #F1F1F1;
    }
`;

const FontGuideBox = styled.div`
    width: 100%;

    padding: 30px;
    text-align: left;

    border-top: 1px solid #D9D9D9;

    ${font(16, 400, 1)}
`;

const GuideTitle = styled.p`
    margin-bottom: 15px;

    ${font(18, 400, 1)}
    color: #6B6B6B;
`;

export default function FontInfoForm() {
    return (
        <FontInfoFormContainer>
            <div style={{padding: "30px"}}>
                <p style={{marginBottom: "15px", color: "#222222"}}>폰트명</p>
                <InputBox>
                    <Input type="text" />
                    <CheckButton>확인</CheckButton>
                </InputBox>
                <p style={{marginLeft: "10px", fontSize: "12px", color: "#F43C71"}}>✨ 사용 가능한 폰트명입니다.</p>
            </div>

            <FontGuideBox>
                <GuideTitle>폰트명 작성 안내</GuideTitle>
                <ul style={{listStyleType: "none", color: "#929292"}}>
                    <li>- 영문(알파벳 A–Z, a–z) 으로 작성해야 합니다.</li>
                    <li>- 숫자(0~9)는 영문과 함께 사용 가능합니다.</li>
                    <li>- 띄어쓰기 및 특수문자는 사용 불가능합니다.</li>
                    <li>- '폰트명 + ByGlym.ttf'로 생성됩니다.</li>
                </ul>
            </FontGuideBox>

            <FontGuideBox>
                <GuideTitle>저작권 안내</GuideTitle>
                <ul style={{listStyleType: "none"}}>
                    <li>- 사용자가 저작권을 소유합니다.</li>
                    <li>- 단, 제작에 사용된 요소(예: 기존 글꼴, 이미지, 코드 등)에 타인의 저작물이 포함된 경우, 그에 대한 저작권 침해 책임은 제작자 본인에게 있습니다.</li>
                    <li>- 배포시 폰트명에 'ByGlym'이 포함되어야 합니다.</li>
                </ul>
            </FontGuideBox>

            <FontGuideBox>
                <GuideTitle>상업적 이용 안내</GuideTitle>
                <ul style={{listStyleType: "none"}}>
                    <li>- 제작한 폰트는 라이센스에 맞게 상업적 목적으로 이용할 수 있습니다.</li>
                </ul>
            </FontGuideBox>
        </FontInfoFormContainer>
    );
}