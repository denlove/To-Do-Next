import styled, { css } from 'styled-components'
import { ITextArea } from '@/types/interfacesUI'
import { AllKeyWith$Prefix } from '@/types/types'

type PropsStyles = AllKeyWith$Prefix<Pick<ITextArea, 'variant'>>

const StyledArea = styled.textarea<PropsStyles>`
    background-color: transparent;
    ${({ $variant }) => $variant === 'task-area' && taskAreaCss}
`

const taskAreaCss = css<Pick<ITextArea, 'value'>>`
    &:hover {
        background-color: var(--checkbox-hover-color);
    }

    &:focus {
        background-color: var(--color-0-0-85);
    }

    &::placeholder {
        font-size: var(--fs-18);
        color: var(--color-0-0-50);
    }
`

export { StyledArea }
