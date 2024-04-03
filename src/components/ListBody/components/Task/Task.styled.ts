import { displayFlex } from '@/styles/templates'
import styled from 'styled-components'

const StyledTask = styled.li`
    ${displayFlex({ jc: 'space-between' })};
    width: 100%;
`

export { StyledTask }
