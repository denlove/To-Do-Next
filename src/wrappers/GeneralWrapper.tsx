'use client'

import { displayFlex } from '@/styles/templates'
import { IParamChildren } from '@/types/interfacesBP'
import styled from 'styled-components'

const StyledGeneralWrapper = styled.div`
    max-width: var(--max-content);
    margin: 0 auto;
    height: 100%;
    ${displayFlex({ jc: 'space-between', ai: 'center' })}
`

const GeneralWrapper = ({ children }: IParamChildren) => {
    return <StyledGeneralWrapper>{children}</StyledGeneralWrapper>
}

export default GeneralWrapper
