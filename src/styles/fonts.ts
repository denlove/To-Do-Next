import { Roboto, Roboto_Mono, Montserrat } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    variable: '--ff-roboto',
    weight: '400',
})

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--ff-roboto-m',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--ff-montserrat',
    weight: '400',
})

export { roboto, roboto_mono, montserrat }
