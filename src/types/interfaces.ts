import { IContent } from './interfacesBP'
import { ButtonVariants } from './types'

export interface ILinkedImage {
    id?: number
    href: string
    src: any
    alt: string
}

export interface INavbarItem extends IContent<string> {
    id?: number
    route: string
    isActive: boolean
}

export interface ITaskInfo extends IContent<string> {
    id?: number
    isCheck: boolean | undefined
}

export interface ITaskControls {
    id?: number
    act: () => void
    variant: ButtonVariants
}
