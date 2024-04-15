import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --max-content: 1280px;
        --header-height: 4.375rem;
        --footer-height: 3.125rem;

        // colors
        --main-bg-color: hsl(0, 0%, 97%);
        --color-0-0-15: hsl(0, 0%, 15%);
        --color-0-0-30: hsl(0, 0%, 30%);
        --color-0-0-50: hsl(0, 0%, 50%);
        --color-0-0-75: hsl(0, 0%, 75%);
        --color-0-0-90: hsl(0, 0%, 90%);
        --color-240-50-90: hsl(240, 25%, 90%);
        --color-180-50-90: hsl(120, 50%, 90%);
        
        // custom checkbox
        --checkbox-border-color: var(--color-0-0-50);
        --checkbox-checked-color: var(--color-0-0-75);
        --checkbox-hover-color: var(--color-0-0-90);
        --checkbox-disabled-bg-color: var(--color-0-0-75);

        // radiuses
        --r-8: 0.5rem;
        --r-20: 1.25rem;
        --r-30: 1.875rem;

        // fonts sizes
        --fs-14: 0.875rem;
        --fs-16: 1rem;
        --fs-18: 1.125rem;
        --fs-20: 1.25rem;
        --fs-48: 3rem;

        // borders
        --list-border: 1px solid var(--color-240-50-90);
        --strike-border: 1px solid var(--checkbox-checked-color);

        // calcs
        --task-area-height: calc(100vh - var(--header-height) - var(--footer-height));
    }
    * {
        border: none;
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    body {
        background-color: var(--main-bg-color);
    }

    a {
        text-decoration: none;
    }
`
export default GlobalStyles
