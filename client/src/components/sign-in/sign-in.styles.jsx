import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 45%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    gap: 20px;
  }
`;
