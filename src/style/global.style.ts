import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
    }

    @font-face {
        font-family: 'Ferry';
        src: url('/fonts/ferry_black.otf') format('opentype');
    }
`;
