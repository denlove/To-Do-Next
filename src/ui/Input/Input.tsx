'use client'

import { IInput } from '@/types/interfacesUI'
import StyledInput from './Input.styled'

const Input = ({ type, isCheck, label, ...props }: IInput) => {
    return (
        <label>
            <StyledInput type={type} checked={isCheck} {...props} />
            {label}
        </label>
    )
}

export default Input
