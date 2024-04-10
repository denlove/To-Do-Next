import { IParamChildren } from '@/types/interfacesBP'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'To-Do | About us',
}

export default function AboutPage({ children }: Readonly<IParamChildren>) {
    return <>{children}</>
}
