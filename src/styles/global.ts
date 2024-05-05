import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --max-content: 1280px;
        --header-height: 4.375rem;
        --footer-height: 3.125rem;

        // colors
        --main-bg-color: hsl(0, 0%, 97%);
        --main-bg-color-a: hsla((0, 0%, 97%, 0.1));
        --color-0-0-15: hsl(0, 0%, 15%);
        --color-0-0-30: hsl(0, 0%, 30%);
        --color-0-0-50: hsl(0, 0%, 50%);
        --color-0-0-75: hsl(0, 0%, 75%);
        --color-0-0-85: hsl(0, 0%, 85%);
        --color-0-0-90: hsl(0, 0%, 90%);
        --color-240-50-90: hsl(240, 50%, 90%);
        --color-120-50-90: hsl(120, 50%, 90%);
        --light-red: hsl(0, 50%, 75%);
        --light-green: hsl(120, 50%, 75%);
        
        // custom checkbox
        --checkbox-border-color: var(--color-0-0-50);
        --checkbox-checked-color: var(--color-0-0-75);
        --checkbox-hover-color: var(--color-0-0-90);
        --checkbox-disabled-bg-color: var(--color-0-0-75);

        // radiuses
        --r-8: 0.5rem;
        --r-16: 1rem;
        --r-20: 1.25rem;
        --r-30: 1.875rem;

        // fonts sizes
        --fs-14: 0.875rem;
        --fs-16: 1rem;
        --fs-18: 1.125rem;
        --fs-20: 1.25rem;
        --fs-30: 1.875rem;
        --fs-36: 2.25rem;
        --fs-40: 2.5rem;
        --fs-48: 3rem;

        // borders
        --header-border: 1px solid var(--color-0-0-90);
        --list-border: 1px solid var(--color-240-50-90);
        --strike-border: 1px solid var(--checkbox-checked-color);
        --add-button-border: 2px solid var(--color-120-50-90);

        // calcs
        --task-area-height: calc(100vh - var(--header-height) - var(--footer-height) - 2rem);
    }
    *, ::after, ::before {
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
