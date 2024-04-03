import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --max-content: 1280px;
        --header-height: 4.375rem;
        --footer-height: 3.125rem;

        // colors
        --main-bg-color: hsl(0, 0%, 97%);
        --border-color: hsl(240, 30%, 75%);
        
        // radiuses
        --r-20: 1.25rem;
        --r-30: 1.875rem;

        // fonts sizes
        --fs-16: 1rem;
        --fs-20: 1.25rem;
        --fs-48: 3rem;

        // borders
        --list-border: 1px solid var(--border-color);

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
