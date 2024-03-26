// boilerplate interfaces

export interface IParamChildren {
    children: React.ReactNode
}

export interface IContent<T> {
    content: T
}

export interface IDefAllProperties<T> {
    [k: string]: T
}
