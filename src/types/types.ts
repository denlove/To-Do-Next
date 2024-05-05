export type SomePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type AllKeyWith$Prefix<T> = {
    [Property in keyof T as `$${string & Property}`]: T[Property]
}

export type ButtonVariants = 'primary' | 'image-like'

export type TextAreaVariants = 'task-area'

export type QueryVariants = 'MOBILE' | 'LARGE_MOBILE' | 'TABLET' | 'DESKTOP'

export type InputTypes = 'button' | 'checkbox' | 'text'

export type WrapperVariants = 'header' | 'task-area'

export type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type RoutesType = '/' | '/about' | '/help' | '/not-found'

export type FlexStyles = 'jc' | 'ai' | 'fd' | 'gp' | 'fw'

export type SetUseStateType<T> = React.Dispatch<React.SetStateAction<T>>
