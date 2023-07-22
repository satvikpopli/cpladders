import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
    theme: object;
}

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.dark};
        font-family: 'Work Sans', sans-serif;
        font-size: 62.5%;
        max-width: 100%;
    }
`

export default GlobalStyles;