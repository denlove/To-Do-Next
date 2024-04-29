'use client'

import { IInput } from '@/types/interfacesUI'
import { StyledInput } from './Input.styled'

const Input = ({ value, ...props }: IInput) => {
    return <StyledInput value={value} {...props} />
}

export default Input
