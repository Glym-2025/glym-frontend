import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../GLYM_LOGO.png";
import { font } from "../../styles/font"
import useAuthStore from '../../stores/authStore';

const Nav = styled.nav`
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;

    border-bottom: 1px solid #dceaff;
    background-color: #ffffff;
`;

const Logo = styled.img`
    width: 116px;
    padding-bottom: 15px;
`;

const Menu = styled(Link)`
    width: 175px;
    height: 100px;

    display: grid;
    place-items: center;

    ${font(28, 600, 1.5)}
    color: #CACACA;
    text-decoration: none;

    &:hover {
        background: linear-gradient(45deg, #FFFFFF, #FFB4C3);

        background-clip: text;            
        -webkit-background-clip: text;   
        -webkit-text-fill-color: transparent;
    }
`;

const S = {
    Nav, Logo, Menu
};

export default function NavBar() {
    const { isLoggedIn, logout } = useAuthStore();

    return (
        <>
            <S.Nav>
                <S.Menu to="/"><S.Logo src={logo} alt="GLYM 로고" /></S.Menu>
                <S.Menu to="/">서비스 소개</S.Menu>
                <S.Menu to="/fontcreation">폰트제작</S.Menu>
                <S.Menu to="/fontlist">이용내역</S.Menu>
                {isLoggedIn ? ( 
                    <S.Menu onClick={logout}>로그아웃</S.Menu>
                ) : (
                    <>
                        <S.Menu to="/login">로그인</S.Menu>
                        <S.Menu to="/signup">회원가입</S.Menu>
                    </>
                )}
            </S.Nav>
        </>
    );
}