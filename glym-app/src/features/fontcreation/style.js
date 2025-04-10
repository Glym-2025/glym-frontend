import styled from "styled-components";
import { font } from "../../styles/font";
import { darken } from "polished";

// ImageUploadForm
const ImageUploadFormContainer = styled.div`
    min-width: 800px;
    width: 800px;
    height: 800px;
    box-sizing: border-box;

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

    &:hover {
        background-color: ${darken(0.1, "#94C7FE")};
    }
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

// FontInfoForm
const FontInfoFormContainer = styled.div`
    min-width: 380px;
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
        background-color: ${darken(0.1, "#FFFFFF")};
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

export const S = {
    ImageUploadForm: {
        Container: ImageUploadFormContainer,
        DropBox: DropBox,
        SelectButton: FileSelectButton,
        GuideBox: ImageGuideBox
    },
    FontInfoForm: {
        Container: FontInfoFormContainer,
        InputBox: InputBox,
        Input: Input,
        CheckButton: CheckButton,
        GuideBox: FontGuideBox,
        GuideTitle: GuideTitle
    }
}