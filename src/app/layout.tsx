import StyledComponentsRegistry from '@/lib/registry'
import Header from '@/models/Header'
import { IParamChildren } from '@/types/interfaces'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'To-Do | Home',
}

export default function RootLayout({ children }: Readonly<IParamChildren>) {
    return (
        <html lang='en'>
            <body>
                <StyledComponentsRegistry>
                    <Header />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
