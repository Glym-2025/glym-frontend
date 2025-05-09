import React from 'react';
import styled, { keyframes } from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #555;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const Message = styled.p`
  margin-top: 1rem;
  color: white;
  font-size: 1.2rem;
`;

export default function LoadingSpinner() {
  return (
    <Overlay>
      <Spinner />
      <Message>요청 중입니다...</Message>
    </Overlay>
  );
};
