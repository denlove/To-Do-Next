'use client'

import { ITextArea } from '@/types/interfacesUI'
import { StyledArea } from './TextArea.styled'

const TextArea = ({ variant, ...props }: ITextArea) => {
    return <StyledArea $variant={variant} {...props} />
}

export default TextArea
