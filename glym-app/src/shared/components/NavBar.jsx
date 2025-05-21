import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../GLYM_LOGO.png";
import { font } from "../../styles/font"
import useAuthStore from '../../stores/authStore';
const Nav = styled.nav`
    min-width: fit-content;
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 0 40px;
    border-bottom: 1px solid #dceaff;
    background-color: #ffffff;
`;

const LogoBox = styled.div`
    display: flex;
    align-items: center;
`;

const MenuBox = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    background-color: #ffffff;
`;

const Logo = styled.img`
    width: 100px;
    
    cursor: pointer;
`;

const Menu = styled(Link)`
    min-width: 120px;

    display: grid;
    place-items: center;

    ${font(24, 600, 1.5)}

    color: #CACACA;
    text-decoration: none;

    &:hover {
        background: linear-gradient(45deg, #F0F0F3, #FFB4C3);
        background-clip: text;
        -webkit-background-clip: text;
        background: linear-gradient(45deg, #FFFFFF, #FFB4C3);

        background-clip: text;            
        -webkit-background-clip: text;   
        -webkit-text-fill-color: transparent;
    }
`;

const S = { Nav, LogoBox, MenuBox, Logo, Menu };

export default function NavBar() {
    const { isLoggedIn, logout } = useAuthStore();
    const navigate = useNavigate();
    const  handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <>
            <S.Nav>
                <S.LogoBox>
                    <Link to="/">
                        <S.Logo src={logo} alt="GLYM 로고" />
                    </Link>
                </S.LogoBox>

                <S.MenuBox>
                    <S.Menu to="/">서비스 소개</S.Menu>
                    {isLoggedIn ? (
                        <>
                            <S.Menu to="/fontcreation">폰트제작</S.Menu>
                            <S.Menu to="/fontlist">이용내역</S.Menu>
                            <S.Menu as="div" onClick={handleLogout}>로그아웃</S.Menu>
                        </>
                    ) : (
                        <>
                            <S.Menu to="/login">로그인</S.Menu>
                            <S.Menu to="/signup">회원가입</S.Menu>
                        </>
                    )}
                </S.MenuBox>
            </S.Nav>
        </>
    );
}