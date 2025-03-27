import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../GLYM_LOGO.png";

const Nav = styled.nav`
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    background-color: #2E3A59;
`;

const Logo = styled.img`
    width: 100px;
`;

const Menu = styled(Link)`
    width: 175px;
    height: 100px;

    display: grid;
    place-items: center;

    color: #F5F5F5;
    text-decoration: none;

    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(45deg, #F0F0F3, #FFB4C3);

        background-clip: text;            
        -webkit-background-clip: text;   
        -webkit-text-fill-color: transparent;
    }
`;

const S = {
    Nav, Logo, Menu
};

export default function NavBar() {
    return (
        <>
            <S.Nav>
                <S.Menu to="/"><S.Logo src={logo} alt="GLYM 로고" /></S.Menu>
                <S.Menu to="/">서비스 소개</S.Menu>
                <S.Menu to="/">폰트제작</S.Menu>
                <S.Menu to="/">이용내역</S.Menu>
                <S.Menu to="/">마이페이지</S.Menu>
                <S.Menu to="/">로그인</S.Menu>
            </S.Nav>
        </>
    );
}