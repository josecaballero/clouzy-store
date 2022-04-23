import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  gap: 15px;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  flex: 1;

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 520px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  flex: 1;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 520px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 12px;
  }
`;
