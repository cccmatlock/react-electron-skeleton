import { createGlobalStyle } from "styled-components";
import colors from "./color-palette";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: ${colors.turquoise};
    color: ${colors.white};
  }
`;

export default GlobalStyles;
