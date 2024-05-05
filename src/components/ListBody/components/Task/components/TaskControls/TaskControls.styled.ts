import styled, { css } from 'styled-components'
import { displayFlex } from '@/styles/templates'

interface IButtonMenu {
    $isOpened: boolean
}

interface IOption {
    $svgId: number | undefined
}

const DropdownButton = styled.aside`
    ${displayFlex({})};
    width: fit-content;
    position: relative;

    & > button {
        z-index: 10;
    }
`

const ButtonMenu = styled.menu<IButtonMenu>`
    position: absolute;
    list-style-type: none;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.3s ease-out;
    transform: scale(0.5);
    visibility: hidden;
    height: 100%;
    ${displayFlex({ gp: '0.125rem', jc: 'space-between' })};
    z-index: 1;

    ${({ $isOpened }) => $isOpened && openMenuCss}
`

const Option = styled.li<IOption>`
    width: fit-content;
    height: 100%;

    & button:hover svg path {
        ${({ $svgId }) =>
            $svgId === 1
                ? css`
                      stroke: var(--light-green);
                  `
                : css`
                      fill: var(--light-red);
                  `}
    }
`

const openMenuCss = css`
    transform: scale(1);
    visibility: visible;
    left: -230%;
    opacity: 1;
`

export { DropdownButton, ButtonMenu, Option }
