import React from 'react';
import { useFontLoader } from '../../../hooks/useFontLoader';
import FontTestDiv from './FontTestDiv';
import styled from 'styled-components';

const PreviewContainer = styled.div`
  border-radius: 8px;
  background-color: #FFFFFF;
  
`;

const LoadingMessage = styled.div`
  text-align: center;
  
  color: #666;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: #ff4444;
  background-color: #ffeeee;
  border-radius: 4px;
`;

export default function FontPreview({fontId, content}) {
  const { fontUrl, fontName, error, isLoading } = useFontLoader(fontId);

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
      <FontTestDiv fontName={fontName} fontUrl={fontUrl} content={content} />
    </PreviewContainer>
  );
} 