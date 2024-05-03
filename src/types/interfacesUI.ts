import { HTMLProps } from 'react'
import { ITaskInfo } from './interfaces'
import { ButtonVariants, TextAreaVariants } from './types'

// interfaces for ui directory

export interface IInput
    extends Partial<Pick<ITaskInfo, 'isCheck'>>,
        HTMLProps<HTMLInputElement> {
    type: 'button' | 'checkbox' | 'text'
    value?: string
}

export interface IButton extends HTMLProps<HTMLButtonElement> {
    children?: React.ReactNode
    variant: ButtonVariants
    type?: 'button'
    text?: string
}

export interface ITextArea extends HTMLProps<HTMLTextAreaElement> {
    variant: TextAreaVariants
}
