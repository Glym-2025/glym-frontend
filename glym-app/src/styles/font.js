import { css } from "styled-components";

export const font = (size = 16, weight = 400, lineHeight = 1.5) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${lineHeight};
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;