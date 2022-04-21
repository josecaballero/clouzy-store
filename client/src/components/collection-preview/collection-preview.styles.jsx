import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  display: inline-block;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
    opacity: 0.5;
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;
