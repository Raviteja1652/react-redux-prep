import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/index';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const toggle = useSelector(state => state.toggle)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterActions.incrementCounter(5))  // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }  payload can be obj or int or any data type
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrementCounter())
  }

  return (
    <main className={classes.counter}>
      {toggle && <>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      </>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
