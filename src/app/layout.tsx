import { ParamChildren } from '@/types/interfaces'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'To-Do | Home',
}

export default function RootLayout({ children }: Readonly<ParamChildren>) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    )
}
