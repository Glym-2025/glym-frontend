import { useState } from "react";
import { S } from '../style';
import logo from "../../../shared/GLYM_LOGO.png"
import kakaoLogo from "../../../shared/KAKAO_LOGO.png"
import { useNavigate } from "react-router-dom";
import useAuthStore from '../../../stores/authStore';
import { ErrorModal } from "../../../shared/components/ErrorModal";

export default function AuthForm() {
    const [showFail, setShowFail] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuthStore();

    async function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const email = formData.get("email");
        const password = formData.get("password");

        const success = await login(email, password);

        if (success) {
            navigate("/");
        } else {
            setShowFail(true);
        }
    }

    return (
        <>
            {showFail && <ErrorModal title="아이디 및 비밀번호를 확인해주세요." subTitle="회원정보가 일치하지 않습니다." onClose={() => setShowFail(false)} />}

            <S.Auth.Container>
                <img src={logo} alt="glym_logo" style={{ width: "150px", margin: "30px 0 60px 0" }}></img>

                <form onSubmit={handleSubmit} >
                    <S.Auth.Input
                        name="email"
                        type="email"
                        placeholder="이메일"
                        required
                    />
                    <S.Auth.Input
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                        required
                    />

                    <S.Auth.LoginButton
                        type="submit"
                        $bgColor="#FF3F77"
                        $fontColor="#FFFFFF"
                    >
                        로그인
                    </S.Auth.LoginButton>
                </form>

                <S.Auth.AuthUtilityButtonContainer>
                    <S.Auth.AuthUtilityButton onClick={() => navigate("/signup")}>회원가입</S.Auth.AuthUtilityButton>
                    <S.Auth.AuthUtilityButton>아이디 찾기</S.Auth.AuthUtilityButton>
                    <S.Auth.AuthUtilityButton>비밀번호 찾기</S.Auth.AuthUtilityButton>
                </S.Auth.AuthUtilityButtonContainer>

                <hr style={{ width: "400px", margin: "0 auto", marginTop: "5px" }} />

                <S.Auth.LoginButton $bgColor="#FEE500" $fontColor="#000000" $marginTop="30px" style={{ position: "relative" }}>
                    <S.Auth.KakaoLogo src={kakaoLogo} />
                    카카오 로그인
                </S.Auth.LoginButton>
            </S.Auth.Container>
        </>
    );
}