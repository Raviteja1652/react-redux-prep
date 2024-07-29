import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, toggle: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        incrementCounter(state, action) {
            state.counter = state.counter + action.payload
            // console.log(action.type)
        },
        decrementCounter(state, action) {
            state.counter--
        },
        toggleCounter(state) {
            state.toggle = !state.toggle
        }
    }
})
 
export const counterActions = counterSlice.actions

export default counterSlice.reducer;