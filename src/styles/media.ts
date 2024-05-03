import { RuleSet, css } from 'styled-components'
import { QueryVariants } from '@/types/types'
import { DESKTOP, LARGE_MOBILE, MOBILE, TABLET } from '@/utils/contents'

const media = {
    mobile: '320px',
    largeMobile: '500px',
    tablet: '768px',
    desktop: '1024px',
}

const mediaQuery = <T extends object>(
    screen: QueryVariants,
    content: RuleSet<T>,
) => {
    switch (screen) {
        case MOBILE:
            return css<T>`
                @media screen and (min-width: ${media.mobile}) and (max-width: ${media.largeMobile}) {
                    ${content}
                }
            `
        case LARGE_MOBILE:
            return css<T>`
                @media screen and (max-width: ${media.tablet}) {
                    ${content}
                }
            `

        case TABLET:
            return css<T>`
                @media screen and (max-width: ${media.desktop}) {
                    ${content}
                }
            `

        case DESKTOP:
            return css<T>`
                @media screen and (min-width: ${media.desktop}) {
                    ${content}
                }
            `
    }
}

export { media, mediaQuery }
