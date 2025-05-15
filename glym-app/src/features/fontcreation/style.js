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

const ImagePreviewBox = styled.div`
    width: 80%;
    height: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #D9D9D9;
    border-radius: 10px;
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
    border: 1px solid ${(props) => props.color || "#F43C71"};

    ${font(18, 400, 1.5)}
    color: ${(props) => props.color || "#F43C71"};
    background-color: #FFFFFF;

    &:hover {
        background-color: ${props => !props.disabled ? darken(0.1, "#FFFFFF") : "inherit"};
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

const Ul = styled.ul`
    ${font(16, 400, 1.2)}
    list-style-type: none;
    color: #929292;
`;

// FontListItem
const FontItemContainer = styled.div`
    width: fit-content;
    display: flex;
    padding: 40px;

    border: ${({ selected }) => (selected ? "1px solid #FF3F77" : "1px solid #d9d9d9")};
    border-radius: 10px;
    cursor: pointer;
`;

const DownloadButton = styled.button`
    width: 100px;
    height: 100px;

    margin-top: auto;

    border-radius: 10px;
    border: 1px solid #D9D9D9;
    background-color: #FF3F77;
`;

const FontBox = styled.div`
    padding-left: 30px;
`;

const FontInfoBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const FontTitle = styled.h1`
    ${font(28, 600, 1.5)}
`;

const FontDate = styled.p`
    margin-top: auto;
    ${font(16, 400, 1.5)}
`;

const FontPreviewBox = styled.div`
    min-width: 600px;
    width: fit-content;
    height: 50px;
    display: flex;
    align-items: center;
    
    margin-top: 15px;
    padding-left: 15px;
    padding-right: 15px;

    border-radius: 10px;
    border: 1px solid #D9D9D9;
`;

export const S = {
    ImageUploadForm: {
        Container: ImageUploadFormContainer,
        DropBox: DropBox,
        SelectButton: FileSelectButton,
        GuideBox: ImageGuideBox,
        ImagePreviewBox
    },
    FontInfoForm: {
        Container: FontInfoFormContainer,
        InputBox: InputBox,
        Input,
        CheckButton,
        GuideBox: FontGuideBox,
        GuideTitle: GuideTitle,
        Ul
    },
    FontListItem: {
        FontItemContainer,
        DownloadButton,
        FontBox,
        FontDate,
        FontInfoBox,
        FontTitle,
        FontPreviewBox
    },
}