'use client'

import GlobalStyles from '@/styles/global'
import { IParamChildren } from '@/types/interfacesBP'
import ReduxProvider from './providers/ReduxProvider'
import StyledComponentsProvider from './providers/StyledComponentsRegistry'

const Providers = ({ children }: IParamChildren) => {
    return (
        <ReduxProvider>
            <StyledComponentsProvider>
                <GlobalStyles />
                {children}
            </StyledComponentsProvider>
        </ReduxProvider>
    )
}

export default Providers
