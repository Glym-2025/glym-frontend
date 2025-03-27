import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../GLYM_LOGO.png";

export default function NavBar() {
    return (
        <>
            <nav>
                <Link to="/"><img src={logo} alt="GLYM 로고" width="116px"/></Link>
                <Link to="/">서비스 소개</Link>
                <Link to="/">폰트제작</Link>
                <Link to="/">이용내역</Link>
                <Link to="/">마이페이지</Link>
                <Link to="/">로그인</Link>
            </nav>
        </>
    );
}