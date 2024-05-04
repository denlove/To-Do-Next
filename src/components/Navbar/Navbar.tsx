'use client'

import { useCallback, useState } from 'react'
import { usePathname } from 'next/navigation'
import { navbarDict } from '@/dictionaries/navbarDict'
import LinkedItem from '@/ui/LinkedItem/LinkedItem'
import Burger from './components/Burger/Burger'
import { StyledNavigation, RoutesList, Navbar } from './Navbar.styled'

const NavBar = () => {
    const pathname = usePathname()
    const [isNavbarVisible, setNavbarVisible] = useState<boolean>(false)

    const showMobileNavbar = useCallback(() => {
        setNavbarVisible(pre => !pre)
    }, [isNavbarVisible])

    return (
        <StyledNavigation>
            <Burger onClick={showMobileNavbar} />
            <Navbar $visible={isNavbarVisible}>
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
            </Navbar>
        </StyledNavigation>
    )
}

export default NavBar
