import { createStore } from 'redux'

const initialState = {counter: 0, toggle: true}
const counterReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + action.value,
            toggle: state.toggle
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            toggle: state.toggle
        }
    }
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            toggle: !state.toggle
        }
    }

    return state;

}
const store = createStore(counterReducer)

export default store;