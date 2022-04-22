import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 499px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 350px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled(Link)`
  margin-bottom: 10px;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media only screen and (max-width: 499px) {
    font-size: 14px;
  }
`;
