import styled from 'styled-components'
import { displayFlex } from '@/styles/templates'

const StyledNavbar = styled.nav`
    width: 40%;
`
const RoutesList = styled.ul`
    width: 100%;
    ${displayFlex({ jc: 'space-around' })}

    & li a {
        transition: color 0.3s linear;
        font-size: var(--fs-16);
        font-family: var(--ff-roboto-m);

        &:visited,
        &:active {
            color: var(--color-0-0-30);
        }
        &:hover {
            color: var(--color-0-0-15);
        }
    }
`

export { StyledNavbar, RoutesList }
