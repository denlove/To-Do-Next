'use client'

import { IButton } from '@/types/interfacesUI'
import { StyledButton } from './Button.styled'

const Button = ({ children, text, variant, ...props }: IButton) => {
    return (
        <StyledButton $variant={variant} {...props}>
            {text}
            {children}
        </StyledButton>
    )
}

export default Button
