import { createGlobalStyle } from "styled-components";
import { rem } from "polished";

const GlobalStyle = createGlobalStyle`
body {
  font-family: system-ui;
  font-size: ${rem(15)};
  line-height: 1.5;
}

p {
  margin-top: 0;
}
`;

export default GlobalStyle;
