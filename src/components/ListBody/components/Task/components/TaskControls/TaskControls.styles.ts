import { displayFlex } from '@/styles/templates'
import styled from 'styled-components'

const DropdownButton = styled.aside`
    ${displayFlex({})};
    width: fit-content;
    position: relative;
`

const ButtonMenu = styled.menu`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    ${displayFlex({ gp: '0.125rem', jc: 'space-between' })};
`

export { DropdownButton, ButtonMenu }
