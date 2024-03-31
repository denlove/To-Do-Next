'use client'

import { IParamChildren } from '@/types/interfacesBP'
import GlobalStyles from '@/styles/global'
import StoreProvider from './redux/StoreProvider'

const Providers = ({ children }: IParamChildren) => {
    return (
        <StoreProvider>
            <GlobalStyles />
            {children}
        </StoreProvider>
    )
}

export default Providers
