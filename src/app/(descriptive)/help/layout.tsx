import { Metadata } from 'next'
import { IParamChildren } from '@/types/interfacesBP'

export const metadata: Metadata = {
    title: 'To-Do | Help',
}

export default function HelpLayout({ children }: Readonly<IParamChildren>) {
    return <>{children}</>
}
