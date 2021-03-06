import styled from "styled-components";

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? "380px" : "240px")};
  min-width: 30%;
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    & .background-image {
      transform: scale(1.1);
    }

    & .content {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media only screen and (max-width: 800px) {
    height: 200px;
  }

  @media only screen and (max-width: 499px) {
    width: 100%;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: transform 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const ContentContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  transition: opacity 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  @media only screen (min-width: 500px) and (max-width: 769px) {
    padding: 12px;
  }
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;

  @media only screen and (min-width: 500px) and (max-width: 769px) {
    font-size: 16px;
  }
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;

  @media only screen and (min-width: 500px) and (max-width: 769px) {
    font-size: 12px;
  }
`;
