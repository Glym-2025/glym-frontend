import { useState, useEffect } from "react";
import { S } from '../style';
import logo from "../../../shared/GLYM_LOGO.png"
import kakaoLogo from "../../../shared/KAKAO_LOGO.png"
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        console.log([...formData.entries()]);
    }

    return (
        <>
            <S.Auth.Container>
                <img src={logo} alt="glym_logo" style={{ width: "150px", margin: "30px 0 60px 0" }}></img>

                <form onSubmit={handleSubmit} >
                    <S.Auth.Input
                        name="username"
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