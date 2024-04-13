import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface CounterState {
    count: number
}

const initialState = {
    count: 0,
} satisfies CounterState as CounterState

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.count += 1
        },

        decrement: state => {
            state.count -= 1
        },

        increaseBy: (state, { payload }: PayloadAction<number>) => {
            state.count += payload
        },
    },
})

export const { increment, decrement, increaseBy } = counterSlice.actions
export const countSelector = (state: RootState) => state.counter.count
export default counterSlice.reducer
