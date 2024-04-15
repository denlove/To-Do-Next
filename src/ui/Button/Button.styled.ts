import { ButtonVariants } from '@/types/types'
import styled from 'styled-components'

interface IStyledButton {
    $variant: ButtonVariants
}

const StyledButton = styled.button<IStyledButton>`
    background-color: transparent;
    cursor: pointer;
    width: 31px;
    height: 31px;
    transition: transform 0.1s linear;

    &:hover {
        transform: scale(0.95);
    }
`
export { StyledButton }
