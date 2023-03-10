import { css } from '@mui/styled-engine';
import { Global } from '@emotion/react';

const Css = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body,
  html {
    background: #f4f4f4;
  }
  img {
    cursor: pointer;
  }
  .redirect-link {
    color: #b7005c;
    text-decoration: none;
  }
`;

function GlobalStyles() {
  return <Global styles={Css} />;
}

export default GlobalStyles;
