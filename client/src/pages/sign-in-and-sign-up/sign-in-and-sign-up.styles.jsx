import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;
