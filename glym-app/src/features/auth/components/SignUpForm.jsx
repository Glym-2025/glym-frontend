import SignUpInput from "./SignUpInput";
import CustomDatePicker from "./CustomDatePicker";
import { S } from "../style";
import { useState, useEffect } from "react";
import { post } from "../../../utils/apis";
import { URLS } from "../../../constants/urls";
import { validateEmail, validateName, validatePassword, validatePasswordConfirm, validatePhone } from "../../../utils/validators";
import { ErrorModal } from "../../../shared/components/ErrorModal";

export default function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState(null);

    const [showFail, setShowFail] = useState(false);
    const [Modalcontext, setModalContext] = useState({ title: "", subTitle: "" });

    const [allChecked, setAllChecked] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const [privacyChecked, setPrivacyChecked] = useState(false);
    const [ageChecked, setAgeChecked] = useState(false);

    useEffect(() => {
        if (termsChecked && privacyChecked && ageChecked) {
            setAllChecked(true);
        } else {
            setAllChecked(false);
        }
    }, [termsChecked, privacyChecked, ageChecked]);

    const handleAllCheck = (e) => {
        const checked = e.target.checked;
        setAllChecked(checked);
        setTermsChecked(checked);
        setPrivacyChecked(checked);
        setAgeChecked(checked);
    };

    const handleSingleCheck = () => {
        setAllChecked(termsChecked && privacyChecked && ageChecked);
    };

    async function handleButtonClick(e) {
        const isEmailValid = email && SignUpValidate.validateEmail(email) === '';
        const isPasswordValid = password && SignUpValidate.validatePassword(password) === '';
        const isPasswordConfirmValid = passwordConfirm && SignUpValidate.validatePasswordConfirm(password, passwordConfirm) === '';
        const isNameValid = username && SignUpValidate.validateName(username) === '';
        const isPhoneValid = phone && SignUpValidate.validatePhone(phone) === '';

        const isTermsAgreed = termsChecked;
        const isPrivacyAgreed = privacyChecked;
        const isAgeAgreed = ageChecked;

        if (!isEmailValid || !isPasswordValid || !isPasswordConfirmValid || !isNameValid || !isPhoneValid) {
            setModalContext({title: "입력창을 확인해주세요.", subTitle: "입력값이 비었거나, 형식에 맞지 않습니다."});
            setShowFail(true);
            return;
        }

        if (!isTermsAgreed || !isPrivacyAgreed || !isAgeAgreed) {
            setModalContext({title: "필수항목에 동의해주세요.", subTitle: "필수 항목에 동의해야 가입할 수 있습니다."});
            setShowFail(true);
            return;
        }

        const body = { email, password, username, phone }
        const response = await post({
            baseUrl: URLS.BASE.TEST,
            endpoint: URLS.ENDPOINT.SIGN_UP,
            data: body,
        });

        if (response.ok) {
            console.log(`${response.status}: ${JSON.stringify(response.data)}`);
            // 로그인 페이지로 이동: navigate("/login", { state: { signedUp: true } });

        } else {
            console.warn(`오류 상태 코드: ${response.status}`);

            setShowFail(true);
        }
    }

    return (
        <>
            <S.SignUp.Container>
                {showFail && <ErrorModal title={Modalcontext.title} subTitle={Modalcontext.subTitle} onClose={() => setShowFail(false)} />}

                <p style={{ fontSize: "30px", fontWeight: "400", marginBottom: "42px" }}>회원가입</p>
                <p style={{ textAlign: "right", marginRight: "40px", color: "#6B6B6B" }}><span style={{ color: "#FF3F77" }}>*</span>필수입력사항</p>

                <hr style={{ width: "500px", margin: "0 auto", marginBottom: "30px", backgroundColor: "#929292" }} />

                <S.SignUp.InputContainer>
                    <SignUpInput
                        value="이메일"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        showCheckButton="true"
                        buttonValue="중복확인"
                        onCheck={() => console.log()}
                        error={validateEmail(email)}
                    />
                    <SignUpInput
                        value="비밀번호"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        error={validatePassword(password)}
                    />
                    <SignUpInput
                        value="비밀번호 확인"
                        type="password"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        error={validatePasswordConfirm(password, passwordConfirm)}
                    />
                    <SignUpInput
                        value="이름"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        error={validateName(username)}
                    />
                    <SignUpInput
                        value="휴대폰"
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        error={validatePhone(phone)}
                    />
                    <CustomDatePicker value={birth} onChange={(date) => setBirth(date)} />
                </S.SignUp.InputContainer>

                <hr style={{ width: "500px", margin: "0 auto", marginTop: "30px", backgroundColor: "#929292" }} />

                <S.SignUp.TermsBox>
                    <p style={{ width: "100px", fontSize: "16px", color: "#222222" }}>이용약관동의<span style={{ color: "#FF3F77" }}>*</span></p>
                    <S.SignUp.TermsWrap>
                        <div style={{ color: "#222222", fontSize: "16px" }}>
                            <input type="checkBox" name="all" style={{ marginRight: "10px" }}
                                checked={allChecked}
                                onChange={handleAllCheck} />전체 동의합니다.
                            <div style={{ color: "#929292", fontSize: "12px", marginLeft: "23px" }}>선택 항목에 대한 동의는 거부하셔도 서비스 이용에 제한이 없습니다.</div>
                        </div>
                        <S.SignUp.TermRow>
                            <input type="checkBox" style={{ marginRight: "10px" }}
                                checked={termsChecked}
                                onChange={(e) => { setTermsChecked(e.target.checked); handleSingleCheck(); }} />[필수]&nbsp;<S.SignUp.TermButton> 서비스 이용약관</S.SignUp.TermButton>에 동의합니다.</S.SignUp.TermRow>
                        <S.SignUp.TermRow>
                            <input type="checkBox" style={{ marginRight: "10px" }}
                                checked={privacyChecked}
                                onChange={(e) => { setPrivacyChecked(e.target.checked); handleSingleCheck(); }} />[필수]&nbsp;<S.SignUp.TermButton> 개인정보 수집 및 이용</S.SignUp.TermButton>에 동의합니다.
                        </S.SignUp.TermRow>
                        <S.SignUp.TermRow>
                            <input type="checkBox" style={{ marginRight: "10px" }}
                                checked={ageChecked}
                                onChange={(e) => { setAgeChecked(e.target.checked); handleSingleCheck(); }} />[필수]&nbsp;본인은 만 14세 이상입니다.</S.SignUp.TermRow>
                        {/* <S.SignUp.TermRow><input type="checkBox" style={{ marginRight: "10px" }} />[선택]&nbsp;마케팅 정보 수신에 동의합니다.</S.SignUp.TermRow> */}
                    </S.SignUp.TermsWrap>
                </S.SignUp.TermsBox>

                <S.SignUp.Button onClick={handleButtonClick}>가입하기</S.SignUp.Button>
            </S.SignUp.Container>
        </>
    );
}