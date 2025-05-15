import styled, { keyframes } from "styled-components";
import { font } from "../styles/font";
import { darken } from "polished";

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

const shine = keyframes`
  0% {
    box-shadow: 0 0 4px 0 #FF3F77, 0 0 0px 0 #fff;
    border-color: #FF3F77;
  }
  50% {
    box-shadow: 0 0 8px 4px #FFB4C3, 0 0 8px 2px #fff;
    border-color: #FF3F77;
  }
  100% {
    box-shadow: 0 0 4px 0 #FF3F77, 0 0 0px 0 #fff;
    border-color: #FF3F77;
  }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
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
    margin-bottom: 50px;
    gap: 15px;
`;

const FontResultImage = styled.img`
    width: 800px;
    animation: ${shine} 1.5s infinite;
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
        NewFontButton,
        FontResultImage,
    }
}