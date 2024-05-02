import { ILinkedImage } from '@/types/interfaces'
import { DENLOVE_GITHUB_ROUTE, HOME_ROUTE } from '@/utils/routes'
import DenloveLogo from '../../public/assets/denlove_logo.svg'
import TodoLogo from '../../public/assets/todo_logo.svg'

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
