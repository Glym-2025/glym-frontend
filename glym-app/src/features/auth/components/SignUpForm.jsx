import SignUpInput from "./SignUpInput";
import CustomDatePicker from "./CustomDatePicker";
import { S } from "../style";

export default function SignUpForm() {
    return (
        <>
            <S.SignUp.Container>
                <p style={{ fontSize: "30px", fontWeight: "400", marginBottom: "42px" }}>회원가입</p>
                <p style={{ textAlign: "right", marginRight: "40px", color: "#6B6B6B" }}><span style={{ color: "#FF3F77" }}>*</span>필수입력사항</p>

                <hr style={{ width: "500px", margin: "0 auto", marginBottom: "30px", backgroundColor: "#929292" }} />

                <S.SignUp.InputContainer>
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
                    />
                    <CustomDatePicker />
                </S.SignUp.InputContainer>

                <hr style={{ width: "500px", margin: "0 auto", marginTop: "30px", backgroundColor: "#929292" }} />

                <S.SignUp.TermsBox>
                    <p style={{ width: "100px", fontSize: "16px", color: "#222222" }}>이용약관동의<span style={{ color: "#FF3F77" }}>*</span></p>
                    <S.SignUp.TermsWrap>
                        <div style={{ color: "#222222", fontSize: "16px" }}><input type="checkBox" style={{ marginRight: "10px" }} />전체 동의합니다.
                            <div style={{ color: "#929292", fontSize: "12px", marginLeft: "23px" }}>선택 항목에 대한 동의는 거부하셔도 서비스 이용에 제한이 없습니다.</div>
                        </div>
                        <S.SignUp.TermRow><input type="checkBox" style={{ marginRight: "10px" }} />[필수]&nbsp;<S.SignUp.TermButton> 서비스 이용약관</S.SignUp.TermButton>에 동의합니다.</S.SignUp.TermRow>
                        <S.SignUp.TermRow><input type="checkBox" style={{ marginRight: "10px" }} />[필수]&nbsp;<S.SignUp.TermButton> 개인정보 수집 및 이용</S.SignUp.TermButton>에 동의합니다.</S.SignUp.TermRow>
                        <S.SignUp.TermRow><input type="checkBox" style={{ marginRight: "10px" }} />[필수]&nbsp;본인은 만 14세 이상입니다.</S.SignUp.TermRow>
                        <S.SignUp.TermRow><input type="checkBox" style={{ marginRight: "10px" }} />[선택]&nbsp;마케팅 정보 수신에 동의합니다.</S.SignUp.TermRow>
                    </S.SignUp.TermsWrap>
                </S.SignUp.TermsBox>

                <S.SignUp.Button>가입하기</S.SignUp.Button>
            </S.SignUp.Container>
        </>
    );
}