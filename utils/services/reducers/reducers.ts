import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
    value: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addCount(state:CounterState) {
            state.value = state.value + 1;
        },
        removeCount(state: CounterState) {
            state.value -= 1;
        },
    }
    })

export const { addCount, removeCount } = counterSlice.actions;

export default counterSlice;