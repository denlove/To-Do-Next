'use client'

import { StyledButton } from './Button.styled'
import { IButton } from '@/types/interfacesUI'

const Button = ({ children, variant }: IButton) => {
    return <StyledButton $variant={variant}>{children}</StyledButton>
}

export default Button
