import styled from "styled-components";
import { font } from "../styles/font";
import { darken } from "polished";
import FontListItem from '../features/fontcreation/components/FontListItem';

// FontCreationPage
const CreationButton = styled.button`
    width: 380px;
    height: 80px;

    border-radius: 10px;
    border: none;

    ${font(24, 400, 1.5)}
    background-color: #FF3F77;
    color: #FFFFFF;

    &:hover {
        background-color: ${darken(0.1, "#FF3F77")};
    }
`;

// FontCreationCompletePage
const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 100px;
`;

const TitleBox = styled.div`
    min-width: 670px;
    width: fit-content;

    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: auto;
    gap: 10px;
`;

const Title = styled.h1`
    ${font(50, 500, 1.5)}
`;

const SubTitle = styled.p`
    ${font(30, 400, 1.5)}
    color: #929292;
`;

const FontBox = styled.div`
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: auto;
    margin-top: 40px;
    gap: 15px;
`;

const NewFontButton = styled.button`
    width: fit-content;
    border: none;

    ${font(16, 400, 1.5)}
    color: #929292;
    background-color: transparent;
`;

const CustomFontListItem = styled(FontListItem)`
    box-shadow: 0 2px 10px rgba(0,0,0,0.12);
`;

// FontListPage
const ListContainer = styled.div`
    width: 1200px;
    
    margin: auto;
    margin-top: 50px;
    padding: 40px;

    text-align: center;
    border-radius: 10px;
    border: 1px solid #D9D9D9;
    background-color: #FFFFFF;
`;

const FontListTitle = styled.h1`
    ${font(40, 400, 1.5)}
    margin-bottom: 30px;
`;

const FontListBox = styled.div`
    width: fit-content;
    max-height: 600px;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    
    margin: auto;
    margin-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;

    gap: 20px;
`;

const ButtonGuideBox = styled.div`
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
`;

const GuideText = styled.p`
    ${font(24, 400, 1.5)}
    color: #929292;
`;

const DeleteButton = styled.button`
    width: 120px;
    height: 60px;

    margin-right: 20px;

    ${font(20, 500, 1.5)}
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #2E3A59;
`;

const DownloadButton = styled.button`
    width: 120px;
    height: 60px;

    ${font(20, 500, 1.5)}
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #FF3F77;
    
`;

export const S = {
    FontCreationPage: {
        Button: CreationButton
    },
    FontCreationCompletePage: {
        Container,
        TitleBox,
        Title,
        SubTitle,
        FontBox,
        NewFontButton,
        CustomFontListItem,
    },
    FontListPage: {
        Container: ListContainer,
        Title: FontListTitle,
        FontListBox,
        ButtonGuideBox,
        GuideText,
        DeleteButton,
        DownloadButton,
    }
}