import React from 'react';
import { useFontLoader } from '../../../hooks/useFontLoader';
import FontTestDiv from './FontTestDiv';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #FFFFFF;
  margin: 20px 0;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #ff4444;
  background-color: #ffeeee;
  border-radius: 4px;
`;

const PreviewTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
  font-size: 1.5rem;
`;

export default function FontPreview() {
  const { fontUrl, fontName, error, isLoading } = useFontLoader(25);

  if (isLoading) {
    return (
      <PreviewContainer>
        <LoadingMessage>폰트를 불러오는 중...</LoadingMessage>
      </PreviewContainer>
    );
  }

  if (error) {
    return (
      <PreviewContainer>
        <ErrorMessage>오류: {error}</ErrorMessage>
      </PreviewContainer>
    );
  }

  return (
    <PreviewContainer>
      <FontTestDiv fontName={fontName} fontUrl={fontUrl} />
    </PreviewContainer>
  );
} 