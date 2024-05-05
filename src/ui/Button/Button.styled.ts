import styled, { css } from 'styled-components'
import { displayFlex } from '@/styles/templates'
import { IButton } from '@/types/interfacesUI'
import { AllKeyWith$Prefix, ButtonVariants } from '@/types/types'

type PropsStyles = AllKeyWith$Prefix<Pick<IButton, 'variant'>>

const StyledButton = styled.button<PropsStyles>`
    cursor: pointer;
    background-color: transparent;

    ${({ $variant }) => ($variant === 'image-like' ? imageLikeCss : primaryCss)}

    @media (hover: none) {
        &:hover {
            transform: scale(1);
        }
    }
`

const primaryCss = css`
    border-radius: var(--r-20);
    ${displayFlex({ gp: '0.25rem' })}
    transition: all 0.1s ease-in;

    &:hover {
        transform: scale(0.97);
    }
`

const imageLikeCss = css<PropsStyles>`
    width: 31px;
    height: 31px;
    transition: all 0.2s ease-in;

    &:hover {
        transform: scale(0.9);
    }
`

export { StyledButton }
