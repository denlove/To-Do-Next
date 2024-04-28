import { displayFlex } from '@/styles/templates'
import { ButtonVariants } from '@/types/types'
import styled, { css } from 'styled-components'

interface IStyledButton {
    $variant: ButtonVariants
}

const StyledButton = styled.button<IStyledButton>`
    cursor: pointer;
    background-color: transparent;

    ${({ $variant }) => ($variant === 'image-like' ? imageLikeCss : primaryCss)}
`

const primaryCss = css`
    border-radius: var(--r-20);
    ${displayFlex({ gp: '0.25rem' })}
    transition: all 0.1s ease-in;

    &:hover {
        transform: scale(0.97);
    }
`

const imageLikeCss = css`
    width: 31px;
    height: 31px;
    transition: all 0.2s ease-in;

    &:hover {
        transform: scale(0.9);
    }
`

export { StyledButton }
