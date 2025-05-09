import SignUpInput from "./SignUpInput";
import SignUpEmailInput from "./SignUpEmailInput";
import CustomDatePicker from "./CustomDatePicker";
import { S } from "../style";
import { useState, useEffect } from "react";
import { post, get } from "../../../utils/requests";
import { URLS } from "../../../constants/urls";
import { validateEmail, validateName, validatePassword, validatePasswordConfirm, validatePhone, validateCode } from "../../../utils/validators";
import { ErrorModal } from "../../../shared/components/ErrorModal";
import LoadingSpinner from "../../../shared/components/LoadingSpinner";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
    const [id, setId] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState(null);
    const [domain, setDomain] = useState('gmail.com');

    const [isLoading, setIsLoading] = useState(false);
    const [showFail, setShowFail] = useState(false);
    const [Modalcontext, setModalContext] = useState({ title: "", subTitle: "" });

    const [duplicateChecked, setDuplicateChecked] = useState(false);
    const [codeChecked, setCodeChecked] = useState(false);

    const [allChecked, setAllChecked] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const [privacyChecked, setPrivacyChecked] = useState(false);
    const [ageChecked, setAgeChecked] = useState(false);

    const navigate = useNavigate();

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

    async function sendEmailCode(email) {
        const response = await post({
            baseUrl: URLS.BASE.TEST,
            endpoint: URLS.ENDPOINT.SEND_EMAIL,
            data: { to: email }
        })

        if (response.ok) {
            console.log(response.data);
        }
        else {
            console.log({ response }, "api 연결 실패");

            setModalContext({ title: "인증코드가 올바르지 않습니다.", subTitle: "인증코드를 다시 확인해주세요." });
            setShowFail(true);
        }
    }

    async function handleVerifyEmail(e) {
        setIsLoading(true);
        const isEmailValid = id && validateEmail(`${id}@${domain}`) === '';

        if (!isEmailValid) {
            setModalContext({ title: "이메일 형식이 올바르지 않습니다.", subTitle: "형식에 맞게 입력해주세요. (예: example@email.com)" });
            setShowFail(true)
            return;
        }

        const response = await get({
            baseUrl: URLS.BASE.TEST,
            endpoint: URLS.ENDPOINT.CHECK_EMAIL,
            params: { email: `${id}@${domain}` }
        })

        if (response.ok) {
            console.log(response.data);

            await sendEmailCode(response.data.data);

            setModalContext({ title: "해당 메일로 인증코드를 전송하였습니다.", subTitle: `${id}@${domain}` });
            setShowFail(true);
            setDuplicateChecked(true);
        }
        else {
            console.log("api 연결 실패");

            setModalContext({ title: "이미 회원가입된 이메일입니다.", subTitle: "가입된 이메일로 로그인하시거나 다른 이메일을 사용해주세요." });
            setShowFail(true);
        }
        setIsLoading(false);
    }

    async function handleCheckCode() {
        const response = await post({
            baseUrl: URLS.BASE.TEST,
            endpoint: URLS.ENDPOINT.VERIFY_EMAIL,
            data: {
                email : `${id}@${domain}`,
                code
            }
        })

        if (response.ok) {
            console.log(response.data);
            
            setModalContext({ title: "인증되었습니다.", subTitle: "" });
            setShowFail(true);
            setCodeChecked(true);
        }
        else {
            console.log({ response }, "api 연결 실패");

            setModalContext({ title: "인증코드가 올바르지 않습니다.", subTitle: "인증코드를 다시 확인해주세요." });
            setShowFail(true);
        }
    }

    async function handleButtonClick(e) {
        const isEmailValid = id && validateEmail(`${id}@${domain}`) === '';
        const isCodeValid = code && validateCode(code) === '';
        const isPasswordValid = password && validatePassword(password) === '';
        const isPasswordConfirmValid = passwordConfirm && validatePasswordConfirm(password, passwordConfirm) === '';
        const isNameValid = username && validateName(username) === '';
        const isPhoneValid = phone && validatePhone(phone) === '';

        const isTermsAgreed = termsChecked;
        const isPrivacyAgreed = privacyChecked;
        const isAgeAgreed = ageChecked;

        if (!isEmailValid || !isCodeValid || !isPasswordValid || !isPasswordConfirmValid || !isNameValid || !isPhoneValid) {
            setModalContext({ title: "입력창을 확인해주세요.", subTitle: "입력값이 비었거나, 형식에 맞지 않습니다." });
            setShowFail(true);
            return;
        }

        if (!duplicateChecked) {
            setModalContext({ title: "이메일 인증을 완료해주세요.", subTitle: "" });
            setShowFail(true);
            return;
        }

        if (!codeChecked) {
            setModalContext({ title: "인증코드가 유효하지 않습니다.", subTitle: "이메일로 전송된 인증코드를 입력해주세요." });
            setShowFail(true);
            return;
        }

        if (!isTermsAgreed || !isPrivacyAgreed || !isAgeAgreed) {
            setModalContext({ title: "필수항목에 동의해주세요.", subTitle: "필수 항목에 동의해야 가입할 수 있습니다." });
            setShowFail(true);
            return;
        }

        const body = {
            email: `${id}@${domain}`,
            password,
            username,
            phone,
        };

        const response = await post({
            baseUrl: URLS.BASE.TEST,
            endpoint: URLS.ENDPOINT.SIGN_UP,
            data: body,
        });

        if (response.ok) {
            console.log(`${response.status}: ${JSON.stringify(response.data)}`);
            navigate("/login", { state: { signedUp: true } });
        } else {
            console.warn(`오류 상태 코드: ${response.status}`);
            setShowFail(true);
        }
    }

    return (
        <>
            <S.SignUp.Container>
                {showFail && <ErrorModal title={Modalcontext.title} subTitle={Modalcontext.subTitle} onClose={() => setShowFail(false)} />}
                {isLoading && <LoadingSpinner />}

                <p style={{ fontSize: "30px", fontWeight: "400", marginBottom: "42px" }}>회원가입</p>
                <p style={{ textAlign: "right", marginRight: "40px", color: "#6B6B6B" }}><span style={{ color: "#FF3F77" }}>*</span>필수입력사항</p>

                <hr style={{ width: "500px", margin: "0 auto", marginBottom: "30px", backgroundColor: "#929292" }} />

                <S.SignUp.InputContainer>
                    <SignUpEmailInput
                        value="이메일"
                        type="email"
                        onChange={(e) => { setId(e.target.value); setDuplicateChecked(false); }}
                        showCheckButton="true"
                        buttonValue="인증번호 요청"
                        onCheck={handleVerifyEmail}
                        onDomainChange={(e) => { setDomain(e.target.options[e.target.selectedIndex].text); console.log(id + '@' + domain); setDuplicateChecked(false); }}
                        error={validateEmail(id + '@' + domain)}
                    />
                    <SignUpInput
                        value="인증코드"
                        type="text"
                        onChange={(e) => { setCode(e.target.value); setCodeChecked(false); }}
                        showCheckButton="true"
                        buttonValue="확인"
                        isDisabled={!duplicateChecked || codeChecked}
                        onCheck={handleCheckCode}
                        error={validateCode(code)}
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