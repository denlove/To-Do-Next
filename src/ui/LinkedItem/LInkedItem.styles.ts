import { css, styled } from 'styled-components'

interface IStyledLinkedItem {
    $isActive: boolean
}

const StyledLinkedItem = styled.li<IStyledLinkedItem>`
    ${({ $isActive }) => ($isActive ? decoration[0] : decoration[1])}
    display: inline-block;
`

const decoration = [
    css`
        a {
            text-decoration: underline;
        }
    `,
    css`
        a {
            text-decoration: none;
        }
    `,
]

export { StyledLinkedItem }
