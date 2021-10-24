import { createGlobalStyle } from "styled-components";
import colors from "./color-palette";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: ${colors.turquoise};
    color: ${colors.white};
    height: 100vh;
    width: 100vw;
    margin: 0;
    overflow: hidden;
  }
`;

export default GlobalStyles;
