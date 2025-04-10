import styled from "styled-components";
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

export const S = {
    FontCreationPage: {
        Button: CreationButton
    }
}