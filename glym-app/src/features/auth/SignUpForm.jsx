import SignUpInput from "./SignUpInput"
import styled from "styled-components"
import { font } from "../../styles/font"

const Container = styled.div`
    width: 582px;
    height: 1010px;
    box-sizing: border-box;
    
    margin: 0 auto;
    padding: 40px 0;
    text-align: center;

    background-color: #FFFFFF;
    border: 1px solid #D9D9D9;
`;

const InputContainer = styled.div`
    width: 500px;

    display: flex;
    flex-direction: column;
    gap: 25px;

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

export default function SignUpForm() {
    return (
        <>
            <Container>
                <p style={{fontSize: "30px", fontWeight: "400", marginBottom: "42px"}}>회원가입</p>
                <p style={{textAlign: "right", marginRight: "40px", color: "#6B6B6B"}}><span style={{color: "#FF3F77"}}>*</span>필수입력사항</p>

                <hr style={{width: "500px", margin: "0 auto", marginBottom: "30px", backgroundColor: "#929292"}}/>

                <InputContainer>
                    <SignUpInput
                        value="이메일"
                        type="email"
                        onChange={() => console.log()}
                        showCheckButton="true"
                        buttonValue="중복확인"
                        onCheck={() => console.log()}
                    />
                    <SignUpInput
                        value="비밀번호"
                        type="password"
                        onChange={() => console.log()}
                    />
                    <SignUpInput
                        value="비밀번호 확인"
                        type="password"
                        onChange={() => console.log()}
                    />
                    <SignUpInput
                        value="이름"
                        type="text"
                        onChange={() => console.log()}
                    />
                    <SignUpInput
                        value="휴대폰"
                        type="text"
                        onChange={() => console.log()}
                        showCheckButton="true"
                        buttonValue="인증번호 받기"
                        onCheck={() => console.log()}
                    />
                    <SignUpInput
                        value="인증번호"
                        type="text"
                        onChange={() => console.log()}
                        showCheckButton="true"
                        buttonValue="확인"
                        onCheck={() => console.log()}
                    />
                </InputContainer>

                <hr style={{width: "500px", margin: "0 auto", marginTop: "30px", backgroundColor: "#929292"}}/>

                <div>
                    <p>이용약관동의<span>*</span></p>
                    <div>
                        <p>전체 동의합니다.</p>
                        <p>선택 항목에 대한 동의는 거부하셔도 서비스 이용에 제한이 없습니다.</p>
                    </div>
                    <div>[필수] <button>서비스 이용약관</button>에 동의합니다.</div>
                    <div>[필수] <button>개인정보 수집 및 이용</button>에 동의합니다.</div>
                    <div>[필수] 본인은 만 14세 이상입니다.</div>
                    <div>[선택] 마케팅 정보 수신에 동의합니다.</div>
                </div>

                <SignUpButton>가입하기</SignUpButton>
            </Container>
        </>
    );
}