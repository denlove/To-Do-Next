import { displayFlex } from '@/styles/templates'
import styled, { css } from 'styled-components'

interface IButtonMenu {
    $isOpened: boolean
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
    height: 100%;
    ${displayFlex({ gp: '0.125rem', jc: 'space-between' })};
    z-index: 1;

    ${({ $isOpened }) => $isOpened && openMenuCss}
`

const Option = styled.li`
    width: fit-content;
    height: 100%;
`

const openMenuCss = css`
    left: -230%;
    opacity: 1;
`

export { DropdownButton, ButtonMenu, Option }