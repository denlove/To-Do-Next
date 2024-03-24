import StyledComponentsRegistry from '@/lib/registry'
import Footer from '@/models/Footer'
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
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}
