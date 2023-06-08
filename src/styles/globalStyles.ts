import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000;
    --dark: #333333;;
    --gray: #00000029; // 0.16
    --gray-light: #0000000a; // 0.04
    --gray-dark: #0000007a; // 0.48
    --purple: #5558FA;
    --purple-hover: #AAABFD;
    --white: #fff;
  }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-style: normal;
      font-weight: 400;
      color: var(--dark);
    }

    body {
      width: 100%;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
`;

export default GlobalStyles;
