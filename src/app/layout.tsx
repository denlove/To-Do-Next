import Providers from '@/lib/Providers'
import Footer from '@/models/Footer'
import Header from '@/models/Header'
import { IParamChildren } from '@/types/interfacesBP'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'To-Do | Home',
}

export default function RootLayout({ children }: Readonly<IParamChildren>) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
