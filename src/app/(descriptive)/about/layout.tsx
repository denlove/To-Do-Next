import { ParamChildren } from '@/types/interfaces'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'To-Do | About us'
}

export default function AboutPage({ children }: Readonly<ParamChildren>) {
    return <>{children}</>
}
