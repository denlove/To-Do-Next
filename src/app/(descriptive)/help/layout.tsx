import { IParamChildren } from '@/types/interfaces'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'To-Do | Help',
}

export default function AboutLayout({ children }: Readonly<IParamChildren>) {
    return <>{children}</>
}
