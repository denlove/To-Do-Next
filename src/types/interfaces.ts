import { SomePartial } from './types'

export interface IParamChildren {
    children: React.ReactNode
}

export interface IContent<T> {
    content: T
}

export interface ILinkedImage {
    id?: number
    href: string
    src: any
    alt: string
}

export interface INavbarItem extends IContent<string> {
    id?: number
    route: string
}

export interface ITaskInfo extends IContent<string> {
    id?: number
    isCheck: boolean | undefined
}

// Just typing fun :D
export interface IInput
    extends Partial<Pick<ITaskInfo, 'isCheck'>>,
        React.HTMLProps<HTMLInputElement> {
    type: 'button' | 'checkbox' | 'text'
    value?: string
}
