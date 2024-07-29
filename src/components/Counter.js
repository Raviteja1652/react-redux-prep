import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const toggle = useSelector(state => state.toggle)

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })
  };

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT', value: 5 })
  }
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' })
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
