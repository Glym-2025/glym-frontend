import { font } from "../../styles/font";
import logo from "../../shared/GLYM_LOGO.png"
import kakaoLogo from "../../shared/KAKAO_LOGO.png"
import styled from "styled-components";

const Container = styled.div`
    width: 584px;
    height: 700px;

    margin: 0 auto;
    text-align: center;

    border: 1px solid #D9D9D9;
    border-radius: 10px;
`;

const Input = styled.input`
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
`;

const LoginButton = styled.button`
    width: 400px;
    height: 60px;

    margin-top: ${(props)=> props.$marginTop || '15px;'};

    ${font(20, 400, 1.5)}
    color: ${(props) => props.$fontColor || '#000000'};
    background-color: ${(props) => props.$bgColor || '#FFFFFF'};

    border: none;
    border-radius: 10px;
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
`;

const KakaoLogo = styled.img`
    width: 30px;
    
    position: absolute;
    left: 16px;
    top: 50%; 
    transform: translateY(-50%);
`;

export default function AuthForm() {
    return (
        <>
            <Container>
                <img src={logo} alt="glym_logo" style={{width: "150px", margin: "30px 0 60px 0"}}></img>
                
                <Input type="text" placeholder="이메일"/>
                <Input type="password" placeholder="비밀번호"/>

                <LoginButton $bgColor="#FF3F77" $fontColor="#FFFFFF">로그인</LoginButton>

                <AuthUtilityButtonContainer>
                    <AuthUtilityButton>회원가입</AuthUtilityButton>
                    <AuthUtilityButton>아이디 찾기</AuthUtilityButton>
                    <AuthUtilityButton>비밀번호 찾기</AuthUtilityButton>
                </AuthUtilityButtonContainer>

                <hr style={{width: "400px", margin: "0 auto", marginTop: "5px", padding: ""}}/>

                <LoginButton $bgColor="#FEE500" $fontColor="#000000" $marginTop="30px" style={{position: "relative"}}>
                    <KakaoLogo src={kakaoLogo}/>
                    카카오 로그인
                    </LoginButton>
            </Container>
        </>
    );
}