// import globalStyle
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* CSS RESET, FONT */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,300;1,500&display=swap');


body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  text-decoration: none;
}

/* Add CSS Reset */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export default GlobalStyle;
