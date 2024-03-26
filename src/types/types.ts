export type SomePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type ButtonVariants = 'primary' | 'image-like'

export type InputTypes = 'button' | 'checkbox' | 'text'
