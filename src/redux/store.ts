import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import counterReducer from './features/counterSlice'
import taskReducer from './features/taskSlice'
import { createPersistStorage } from './persistStorage'

const persistConfig = {
    key: 'root',
    storage: createPersistStorage(),
    blacklist: ['counter'],
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    taskManager: taskReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
