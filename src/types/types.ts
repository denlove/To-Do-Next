export type SomePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type ButtonVariants = 'primary' | 'image-like'

export type InputTypes = 'button' | 'checkbox' | 'text'

export type WrapperVariants = 'header' | 'task-area'

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type RoutesType = '/' | '/about' | '/help'

export type FlexStyles = 'jc' | 'ai' | 'fd' | 'gp'
