import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  display: inline-block;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
    opacity: 0.5;
  }

  @media only screen and (max-width: 499px) {
    font-size: 22px;
  }
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 499px) {
    grid-template-columns: 1fr;
  }
`;
