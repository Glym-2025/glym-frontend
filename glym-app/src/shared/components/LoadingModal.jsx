import React from 'react';
import styled, { keyframes } from 'styled-components';
import { font } from '../../styles/font';
import logo from "../GLYM_LOGO.png";

const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    margin-bottom: 12px;

    ${font(30, 600, 1.5)}
    color: #FFFFFF;
`;

const Message = styled.p`
    margin-bottom: 20px;

    ${font(16, 600, 1.5)}
    color: #929292;
`;

const Logo = styled.img`
    width: 116px;
    padding-bottom: 15px;
`;

const Dots = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const blink = keyframes`
    0%, 80%, 100% {
        opacity: 0;
    }
    40% {
        opacity: 1;
    }
`;

const Dot = styled.div`
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: #FFFFFF;
    border-radius: 50%;
    animation: ${blink} 1.4s infinite both;

    &:nth-child(2) {
        animation-delay: 0.2s;
    }

    &:nth-child(3) {
        animation-delay: 0.4s;
    }
`;

export function LoadingModal({ title, subTitle }) {
    return (
        <Backdrop>
            <Container>
                <Logo src={logo} alt="GLYM 로고" />
                <Title>{title}</Title>
                <Message>{subTitle}</Message>
                <Dots>
                    <Dot />
                    <Dot />
                    <Dot />
                </Dots>
            </Container>
        </Backdrop>
    );
}
