'use client'

import { IInput } from '@/types/interfaces'

const Input = ({ type, isCheck, ...props }: IInput) => {
    return <input type={type} checked={isCheck} {...props} />
}

export default Input
