import React from 'react';
import styled from 'styled-components';
import { font } from '../../styles/font';
import { darken } from 'polished';

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

    background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
    width: 400px;

    text-align: center;
    padding: 30px;

    border-radius: 10px;
    background-color: white;
`;

const Title = styled.h2`
    margin-bottom: 12px;

    ${font(20, 600, 1.5)}
    color: #222222;
`;

const Message = styled.p`
    margin-bottom: 20px;

    color: #929292;
`;

const CloseButton = styled.button`
    padding: 8px 16px;

    cursor: pointer;
    
    border: none;
    border-radius: 10px;
    
    font-weight: bold;
    color: white;
    background-color: #FF3F77;
    
    &:hover {
        background-color: ${(props) => darken(0.05, props.$bgColor || '#FF3F77')};
    }
`;

export function ErrorModal({ title, subTitle, onClose }) {
    return (
        <Backdrop>
            <Modal>
                <Title>{title}</Title>
                <Message>{subTitle}</Message>
                <CloseButton onClick={onClose}>닫기</CloseButton>
            </Modal>
        </Backdrop>
    );
}
