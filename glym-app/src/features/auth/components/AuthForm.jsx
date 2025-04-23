import { useState } from "react";
import { S } from '../style';
import logo from "../../../shared/GLYM_LOGO.png"
import kakaoLogo from "../../../shared/KAKAO_LOGO.png"
import { useNavigate } from "react-router-dom";
import { post } from "../../../utils/requests";
import { URLS } from "../../../constants/urls";
import { ErrorModal } from "../../../shared/components/ErrorModal";

export default function AuthForm() {
    const [showFail, setShowFail] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const body = {
            email: formData.get("email"),
            password: formData.get("password"),
        }

        const response = await post({
            baseUrl: URLS.BASE.TEST,
            endpoint: URLS.ENDPOINT.LOGIN,
            data: body,
        });

        if (response.ok) {
            console.log(`${response.status}: ${JSON.stringify(response.data)}`);
            sessionStorage.setItem('accessToken', response.AccessToken);
            navigate("/");
        } else {
            setShowFail(true);
            console.warn(`오류 상태 코드: ${response.status}`);
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