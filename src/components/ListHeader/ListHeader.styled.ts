import styled from 'styled-components'
import { displayFlex } from '@/styles/templates'

const StyledArticle = styled.article`
    width: 100%;
`

const HeadingGroup = styled.hgroup`
    margin: 0 auto;
    ${displayFlex({ fd: 'column', gp: '0.5rem' })};
    font-family: var(--ff-montserrat);

    h1 {
        color: var(--color-0-0-50);
        font-size: var(--fs-20);
        font-weight: normal;
    }

    p {
        color: var(--color-0-0-75);
        font-size: var(--fs-16);
    }
`
export { StyledArticle, HeadingGroup }
