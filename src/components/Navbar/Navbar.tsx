'use client'

import { usePathname } from 'next/navigation'
import { navbarDict } from '@/dictionaries/navbarDict'
import LinkedItem from '@/ui/LinkedItem/LinkedItem'
import { RoutesList, StyledNavbar } from './Navbar.styled'

const Navbar = () => {
    const pathname = usePathname()

    return (
        <StyledNavbar>
            <RoutesList>
                {navbarDict.map(el => {
                    return (
                        <LinkedItem
                            key={el.id}
                            route={el.route}
                            content={el.content}
                            isActive={el.route === pathname ? true : false}
                        />
                    )
                })}
            </RoutesList>
        </StyledNavbar>
    )
}

export default Navbar
