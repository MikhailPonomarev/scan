import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* @import './fonts.css'; */
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    @font-face {
        font-family: 'Ferry', sans-serif;
        src: url('../assets/fonts/ferry_black.otf') format('opentype');
    }
`;

export default GlobalStyle;
