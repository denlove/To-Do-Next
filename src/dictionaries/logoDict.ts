import { ILinkedImage } from '@/types/interfaces'
import TodoLogo from '../../public/assets/todo_logo.svg'
import DenloveLogo from '../../public/assets/denlove_logo.svg'

export const logoDict: Array<ILinkedImage> = [
    { id: 1, href: '/', src: TodoLogo, alt: 'Logo image - phrase "To-Do"' },
    {
        id: 2,
        href: 'https://github.com/denlove',
        src: DenloveLogo,
        alt: 'Logo image - phrase "Denlove"',
    },
]
