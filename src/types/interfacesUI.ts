import { ITaskInfo } from './interfaces'
import { ButtonVariants } from './types'

// interfaces for ui directory

export interface IInput
    extends Partial<Pick<ITaskInfo, 'isCheck'>>,
        React.HTMLProps<HTMLInputElement> {
    type: 'button' | 'checkbox' | 'text'
    value?: string
    label: string
}

export interface IButton extends React.HTMLProps<HTMLButtonElement> {
    children?: React.ReactNode
    variant: ButtonVariants
}
