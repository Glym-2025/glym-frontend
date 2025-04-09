import styled from "styled-components";
import { font } from "../../styles/font";
import { lighten, darken } from 'polished';

// AuthForm Style
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

// SignUp Style
const SignUpContainer = styled.div`
    width: 582px;
    height: 950px;
    box-sizing: border-box;
    
    margin: 0 auto;
    padding: 40px 0;
    text-align: center;

    border-radius: 10px;
    background-color: #FFFFFF;
    border: 1px solid #D9D9D9;
`;

const SignUpInputContainer = styled.div`
    width: 500px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    margin: 0 auto;
    align-items: center;
`;

const SignUpButton = styled.button`
    width: 400px;
    height: 60px;

    border-radius: 10px;
    border: none;

    ${font(20, 400, 1.5)}
    color: #FFFFFF;
    background-color: #FF3F77;
`;

const TermsBox = styled.div`
    width: 500px;
    height: 210px;

    display: flex;
    margin: 0 auto;
    margin-top: 30px;
    gap: 30px;
`;

const TermsWrap = styled.div`
    flex: 1;
    text-align: left;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TermRow = styled.div`
    display: flex;

    color: #929292;
    ${font(16, 400, 1.5)}
`;

const TermButton = styled.button`
    border: none;
    text-decoration: underline;

    ${font(16, 400, 1.5)}
    color: #929292;
    background-color: inherit;

    &:hover {
        color: #222222;
    }
`;

// SignUpInput Style
const Container = styled.div`
    width: 500px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const P = styled.p`
    width: 100px;
    height: 40px;

    display: flex;
    align-items: center;
    margin: auto 0;
    margin-bottom: 15px;

    font-size: 16px;
    color: #222222;
`;

const Span = styled.span`
    box-sizing: border-box;
`;

const Input = styled.input`
    width: ${(props) => {
        if (props.type === "email") return "135px";
        else return "250px";
    }};
    height: 40px;
    box-sizing: border-box;

    padding: 0 10px 0 10px;

    border: 1px solid #929292;
    border-radius: 5px;

    ${font(16, 400, 1.5)}
    &:focus {
        outline: none;
        border: 1px solid #FF3F77;
    }
`;

const ErrorMessage = styled.p`
    width: 250px;
    height: 15px;
    color: #FF3F77;
    font-size: 10px;
    text-align: left;
    align-content: center;
`;

const Button = styled.button`
    width: 100px;
    height: 40px;
    margin-bottom: 15px;

    ${font(14, 400, 1.5)}
    ${(props) => {
        if (props.disabled) {
            return`color: #929292; background-color: #d9d9d9;`;
        }
        else {
            return`color: #FFFFFF; background-color:  #FF3F77;`;
        }
    }}

    border-radius: 5px;
    border: 1px solid #929292;
`;

export const S = {
    Auth: {
        Container: AuthFormContainer,
        Input: AuthFormInput,
        LoginButton: AuthFormLoginButton,
        AuthUtilityButton,
        AuthUtilityButtonContainer,
        KakaoLogo: AuthFormKakaoLogo
    },

    SignUp: {
        Container: SignUpContainer,
        InputContainer: SignUpInputContainer,
        Button: SignUpButton,
        Label: P,
        TermsBox,
        TermsWrap,
        TermRow,
        TermButton
    },

    InputRow: {
        Container,
        Label: P,
        RequiredMark: Span,
        Input,
        ErrorMessage,
        Button,
    }
};