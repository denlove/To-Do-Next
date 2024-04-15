'use client'

import { IInput } from '@/types/interfacesUI'
import { StyledLable, StyledInput } from './Input.styled'

const Input = ({ label, ...props }: IInput) => {
    return (
        <StyledLable>
            <StyledInput {...props} />
            {label}
        </StyledLable>
    )
}

export default Input
