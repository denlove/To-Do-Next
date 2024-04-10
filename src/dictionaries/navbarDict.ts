import { INavbarItem } from '@/types/interfaces'
import { ABOUT_ROUTE, HELP_ROUTE, HOME_ROUTE } from '@/utils/routes'

type NavbarType = Array<INavbarItem>

export const navbarDict: NavbarType = [
    { id: 1, route: HOME_ROUTE, content: 'Home', isActive: false },
    { id: 2, route: ABOUT_ROUTE, content: 'About us', isActive: false },
    { id: 3, route: HELP_ROUTE, content: 'Help', isActive: false },
]
