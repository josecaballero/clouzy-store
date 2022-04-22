import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Josefin Sans", sans-serif;
    padding: 40px;

    @media only screen and (max-width: 769px) {
      padding: 20px;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;
