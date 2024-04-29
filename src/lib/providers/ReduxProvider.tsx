'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { IParamChildren } from '@/types/interfacesBP'
import { makeStore, AppStore } from '../../redux/store'

export default function ReduxProvider({ children }: IParamChildren) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = makeStore()
    }

    return (
        <Provider store={storeRef.current}>
            <PersistGate
                loading={null}
                persistor={storeRef.current.__persistor}
            >
                {children}
            </PersistGate>
        </Provider>
    )
}
