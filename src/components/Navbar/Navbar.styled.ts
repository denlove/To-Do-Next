import styled from 'styled-components'
import { displayFlex } from '@/styles/templates'

const StyledNavbar = styled.nav`
    width: 40%;
`
const RoutesList = styled.ul`
    width: 100%;
    ${displayFlex({ jc: 'space-around' })}
`

export { StyledNavbar, RoutesList }
