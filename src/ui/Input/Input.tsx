'use client'

import { IInput } from '@/types/interfacesUI'
import { StyledInput } from './Input.styled'

const Input = ({ ...props }: IInput) => {
    return <StyledInput {...props} />
}

export default Input
