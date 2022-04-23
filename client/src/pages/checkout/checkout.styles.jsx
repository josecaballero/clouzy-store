import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media only screen and (max-width: 1024px) {
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  gap: 15px;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  flex: 1;

  @media only screen and (max-width: 499px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media only screen and (max-width: 1024px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;

  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
