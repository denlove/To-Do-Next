import styled from 'styled-components'
import { css } from 'styled-components'
import { displayFlex } from '@/styles/templates'
import { WrapperVariants } from '@/types/types'

interface IStyledWrapper {
    $variant: WrapperVariants
    $className?: string
}

const StyledWrapper = styled.div<IStyledWrapper>`
    ${({ $variant }) => ($variant === 'header' ? headerStyles : taskAreaStyles)}
    margin: 0 auto;
    max-width: var(--max-content);
`

const headerStyles = css`
    height: 100%;
    ${displayFlex({ jc: 'space-around', ai: 'center' })};
`

const taskAreaStyles = css`
    overflow: auto;
`

export { StyledWrapper }
