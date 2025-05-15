import styled from "styled-components";
import { font } from "../styles/font";
import { darken } from "polished";
import FontCreationCompletePage from "./FontCreationCompletePage";

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
        NewFontButton
    }
}