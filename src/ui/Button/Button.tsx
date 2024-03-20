'use client'

import { StyledButton } from './Button.styled'

interface IButton {
    children?: React.ReactNode
}

const Button = ({ children }: IButton) => {
    return <StyledButton>{children}</StyledButton>
}

export default Button
