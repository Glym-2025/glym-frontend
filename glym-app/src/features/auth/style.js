import styled from "styled-components";
import { font } from "../../styles/font";
import { lighten, darken } from 'polished';

const AuthFormContainer = styled.div`
    width: 584px;
    height: 700px;

    margin: 0 auto;
    text-align: center;

    border: 1px solid #D9D9D9;
    border-radius: 10px;
`;

const AuthFormInput = styled.input`
    width: 400px;
    height: 50px;
    box-sizing: border-box;

    display: block;
    padding: 0 30px;
    margin: 0 auto;
    margin-bottom: 15px;

    ${font(16, 400, 1.5)}

    border: 1px solid #929292;
    border-radius: 10px;

    &:focus {
        outline: none;
        border: 1px solid #FF3F77;
    }
`;

const AuthFormLoginButton = styled.button`
    width: 400px;
    height: 60px;

    margin-top: ${(props) => props.$marginTop || '15px;'};

    ${font(20, 400, 1.5)}
    color: ${(props) => props.$fontColor || '#000000'};
    background-color: ${(props) => props.$bgColor || '#FFFFFF'};

    border: none;
    border-radius: 10px;

    &:hover {
        background-color: ${(props) => darken(0.05, props.$bgColor || '#FFFFFF')};
    }
`;

const AuthUtilityButtonContainer = styled.div`
    width: 400px; 

    margin: 0 auto;
    margin-top: 10px;

    display: flex;
    justify-content: space-between;

    & > :nth-child(1) { margin-right: auto; }
    & > :nth-child(2), & > :nth-child(3) { margin-left: 15px; }
`;

const AuthUtilityButton = styled.button`
    background-color: inherit;
    color: #6B6B6B;

    border: none;

    &:hover {
        color: ${lighten(0.2, '#6B6B6B')};
    }
`;

const AuthFormKakaoLogo = styled.img`
    width: 30px;

    position: absolute;
    left: 16px;
    top: 50%; 
    transform: translateY(-50%);
`;

export const S = {
    Auth: {
        Container: AuthFormContainer,
        Input: AuthFormInput,
        LoginButton: AuthFormLoginButton,
        AuthUtilityButton,
        AuthUtilityButtonContainer,
        KakaoLogo: AuthFormKakaoLogo
    }
};