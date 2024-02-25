#  React Redux toolkit onbording

- Redux Toolkit makes it easier to understand why we use Redux and its advantages and disadvantages.

Advantages:

Simple: Redux Toolkit makes common tasks like setting up a store, creating reducers, and updating state easier.
Opinionated: It provides good default settings for setting up a store and includes commonly used Redux addons.
Powerful: Redux Toolkit is inspired by other libraries like Immer and Autodux. It allows you to write update logic more easily and even automatically creates parts of the state.
Effective: It lets you focus on what your app needs to do, so you can write less code to accomplish more tasks.

## Getting Started

Doc link : (https://redux-toolkit.js.org/introduction/getting-started)


Doc kor link : (https://ko.redux.js.org/introduction/why-rtk-is-redux-today/)

`npm install`

```bash
npm install @reduxjs/toolkit
npm install react-redux

or
npm install @reduxjs/toolkit react-redux
```

- had some bug/issue

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        decrementByAmount : (state,action) => {
            state.count -= action.payload;
        }
    }
});

export const { increment, decrement, reset, incrementByAmount } = CounterSlice.actions;

export default CounterSlice.reducer;

```

-
```js
import React,{useState }from 'react';
import {useSelector, useDispatch} from "react-redux";
import {
    increment, 
    decrement,
    reset,
    incrementByAmount,
    decrementByAmount
} from "./CounterSlice";




const Counter = () => {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const [decrementAmount, setDecrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;
    const subtractValu = Number(decrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>

        <input
        type='text'
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
         />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={() => dispatch(decrementAmount)}>Subtract Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
    </section>
  )
}

export default Counter
```

## How to slolved the issue ?



