import { ButtonVariants } from '@/types/types'
import styled from 'styled-components'

interface IStyledButton {
    $variant: ButtonVariants
}

const StyledButton = styled.button<IStyledButton>`
    background-color: ${({ $variant }) =>
        $variant === 'image-like' ? 'red' : 'blue'};
    border: 1px solid black;
`
export { StyledButton }
