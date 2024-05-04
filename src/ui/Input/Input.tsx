'use client'

import { memo } from 'react'
import { IInput } from '@/types/interfacesUI'
import { StyledInput } from './Input.styled'

const Input = memo(function Input({ ...props }: IInput) {
    return <StyledInput {...props} />
})

export default Input
