import { RuleSet, css } from 'styled-components'

const media = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
}

const mediaQuery = <T extends object>(screen: string, content: RuleSet<T>) => {
    if (screen === media.mobile) {
        return css<T>`
            @media screen and (max-width: ${media.tablet}) {
                ${content}
            }
        `
    }

    if (screen === media.tablet) {
        return css<T>`
            @media screen and (max-width: ${media.desktop}) {
                ${content}
            }
        `
    }
}

export { media, mediaQuery }
