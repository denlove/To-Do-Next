'use client'

import { IParamChildren } from '@/types/interfacesBP'
// import StyledComponentsRegistry from './StyledComponentsRegistry'
import GlobalStyles from '@/styles/global'

const Providers = ({ children }: IParamChildren) => {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    )
}

export default Providers
