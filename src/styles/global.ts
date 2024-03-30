import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --max-content: 1280px;
        --header-height: 4.375rem;
        --footer-height: 3.125rem;

        // fonts sizes
        --fs-16: 1rem;
        --fs-20: 1.25rem;
        --fs-48: 3rem;

        // calcs
        --task-area-height: calc(100vh - var(--header-height) - var(--footer-height));
    }
    * {
        border: none;
        margin: 0;
        padding: 0;
        outline: none;
    }

    body {
        background-color: hsla(0, 0%, 80%);
    }

    a {
        text-decoration: none;
    }
`
export default GlobalStyles
