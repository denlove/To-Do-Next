import { ILinkedImage } from '@/types/interfaces'
import TodoLogo from '../../public/assets/todo_logo.svg'
import DenloveLogo from '../../public/assets/denlove_logo.svg'
import { DENLOVE_GITHUB_ROUTE, HOME_ROUTE } from '@/utils/routes'

export const logoDict: Array<ILinkedImage> = [
    {
        id: 1,
        href: HOME_ROUTE,
        src: TodoLogo,
        alt: 'Logo image - phrase "To-Do"',
    },
    {
        id: 2,
        href: DENLOVE_GITHUB_ROUTE,
        src: DenloveLogo,
        alt: 'Logo image - phrase "Denlove"',
    },
]
