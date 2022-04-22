import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 45%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 425px) {
    button {
      width: 100%;
    }
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
