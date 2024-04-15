'use client'

import { StyledButton } from './Button.styled'
import { IButton } from '@/types/interfacesUI'

const Button = ({ children, variant, ...props }: IButton) => {
    return (
        <StyledButton $variant={variant} {...props}>
            {children}
        </StyledButton>
    )
}

export default Button
