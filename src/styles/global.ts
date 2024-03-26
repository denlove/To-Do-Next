import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --max-content: 1280px;
        --header-height: 4.375rem
    }
    * {
        border: none;
        margin: 0;
        padding: 0;
        outline: none;
    }
    body {
        background-color: hsla(0, 0%, 30%);
    }
`
export default GlobalStyles
