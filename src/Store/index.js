// import { createStore, combineReducers } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {counter: 0, toggle: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
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


// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + action.value,
//             toggle: state.toggle
//         }
//     }
//     if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1,
//             toggle: state.toggle
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             toggle: !state.toggle
//         }
//     }

//     return state;

// };

const store = configureStore({
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions

export default store;