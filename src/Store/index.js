// import { createStore, combineReducers } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'

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

const initialAuthState = { isAuthenticated: false }

const authSlice = createSlice({
    name: 'Authenticated',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) { state.isAuthenticated = false }
    }
})

const store = configureStore({
    reducer: { counter : counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions

export const authActions = authSlice.actions

export default store;