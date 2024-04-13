'use client'

import { IParamChildren } from '@/types/interfacesBP'
import GlobalStyles from '@/styles/global'
import ReduxProvider from './providers/ReduxProvider'

const Providers = ({ children }: IParamChildren) => {
    return (
        <ReduxProvider>
            <GlobalStyles />
            {children}
        </ReduxProvider>
    )
}

export default Providers
