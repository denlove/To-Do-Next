import styled, { css } from 'styled-components'
import { media, mediaQuery } from '@/styles/media'
import { box, displayFlex } from '@/styles/templates'
import { LARGE_MOBILE } from '@/utils/contents'

interface INavbar {
    $visible: boolean
}

const StyledNavigation = styled.div`
    width: 40%;
    ${mediaQuery(
        LARGE_MOBILE,
        css`
            ${box('2rem')};
        `,
    )}
`

const Navbar = styled.nav<INavbar>`
    width: 100%;
    ${mediaQuery(
        LARGE_MOBILE,
        css<INavbar>`
            visibility: hidden;
            position: absolute;
            padding-top: 5rem;
            top: var(--header-height);
            right: -40vw;
            width: 40vw;
            height: calc(100vh - var(--header-height));
            background-color: var(--main-bg-color);
            border-left: var(--header-border);
            z-index: 9999;
            transition: all 0.2s linear;
            opacity: 0;

            ${({ $visible }) => $visible && visibleCss}
        `,
    )}
`
const visibleCss = css`
    visibility: visible;
    opacity: 1;
    right: 0;
`

const RoutesList = styled.ul`
    width: 100%;
    ${displayFlex({ jc: 'space-around' })}

    ${mediaQuery(
        LARGE_MOBILE,
        css`
            ${displayFlex({ fd: 'column', jc: 'space-around', gp: '1rem' })}
            padding: 1rem 0;
        `,
    )}

    & li {
        margin: 0 auto;

        & a {
            transition: color 0.3s linear;
            font-size: var(--fs-16);
            font-family: var(--ff-roboto-m);
            text-align: center;

            ${mediaQuery(
                LARGE_MOBILE,
                css`
                    font-size: var(--fs-20);
                `,
            )}

            &,
        &:visited,
        &:active {
                color: var(--color-0-0-30);
            }
            &:hover {
                color: var(--color-0-0-15);
            }
        }
    }
`

export { StyledNavigation, Navbar, RoutesList }
