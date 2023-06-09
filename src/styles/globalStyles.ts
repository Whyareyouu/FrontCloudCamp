import { createGlobalStyle } from 'styled-components';
import FontSbSansRegularWoff2 from '../fonts/SB-Sans-Interface.woff2';
import FontSbSansRegularWoff from '../fonts/SB-Sans-Interface.woff';
import FontSbSans600Woff2 from '../fonts/SB-Sans-Interface600.woff2';
import FontSbSans600Woff from '../fonts/SB-Sans-Interface600.woff';
import FontSbSans6TextWoff2 from '../fonts/SB-Sans-Text.woff2';
import FontSbSansTextWoff from '../fonts/SB-Sans-Text.woff';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000;
    --dark: #333333;;
    --gray: #00000029; // 0.16
    --gray-light: #0000000a; // 0.04
    --gray-dark: #0000007a; // 0.48
    --purple: #5558FA;
    --purple-hover: #AAABFD;
    --error: #E84E58;
    --white: #fff;
  }

  font-face {
    font-family: 'SB-Sans';
    font-weight: 400;
    src: url(${FontSbSansRegularWoff2}) format('woff2'),
    url(${FontSbSansRegularWoff}) format('woff'),
    url(${FontSbSans6TextWoff2}) format('woff2'),
    url(${FontSbSansTextWoff}) format('woff'),
  }

  @font-face {
    font-family: 'SB-Sans';
    font-weight: 600;
    src: url(${FontSbSans600Woff2}) format('woff2'),
    url(${FontSbSans600Woff}) format('woff');
  }

  * {
    font-family: "Sb-Sans";
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
