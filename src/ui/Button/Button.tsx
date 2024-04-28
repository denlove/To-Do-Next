'use client'

import { StyledButton } from './Button.styled'
import { IButton } from '@/types/interfacesUI'

const Button = ({ children, text, variant, ...props }: IButton) => {
    return (
        <StyledButton $variant={variant} {...props}>
            {text}
            {children}
        </StyledButton>
    )
}

export default Button
