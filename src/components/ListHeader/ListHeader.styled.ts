import styled from 'styled-components'
import { displayFlex } from '@/styles/templates'

const StyledArticle = styled.article`
    width: 100%;
`

const HeadingGroup = styled.hgroup`
    margin: 0 auto;
    ${displayFlex({ fd: 'column' })};
`
export { StyledArticle, HeadingGroup }
