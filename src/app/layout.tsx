import { Metadata } from 'next'
import Providers from '@/lib/Providers'
import Footer from '@/models/Footer'
import Header from '@/models/Header'
import { roboto_mono, roboto, montserrat } from '@/styles/fonts'
import { IParamChildren } from '@/types/interfacesBP'

export const metadata: Metadata = {
    title: 'To-Do | Home',
}

export default function RootLayout({ children }: Readonly<IParamChildren>) {
    return (
        <html
            lang='en'
            className={`${roboto.variable} ${roboto_mono.variable} ${montserrat.variable}`}
        >
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
