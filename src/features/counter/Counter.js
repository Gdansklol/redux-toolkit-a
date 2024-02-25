import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount,
    decrementByAmount
} from "./CounterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const [decrementAmount, setDecrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;
    const subtractValue = Number(decrementAmount) || 0; // Corrected variable name

    const resetAll = () => {
        setIncrementAmount(0);
        setDecrementAmount(0); // Reset both increment and decrement amounts
        dispatch(reset());
    }

    const handleDecrement = () => {
        console.log("Subtract Value:", subtractValue); // Log subtractValue before dispatching action
        dispatch(decrementByAmount(subtractValue));
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                {/* <button onClick={() => dispatch(decrement())}>-</button> */}
                <button onClick={handleDecrement}>-</button> {/* Call handleDecrement instead */}
            </div>

            <input
                type='text'
                placeholder='+ num'
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <input
                type='text'
                placeholder=' - '
                value={decrementAmount} // Use decrementAmount here
                onChange={(e) => setDecrementAmount(e.target.value)}
/>

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}> + Add Amount </button>
                <button onClick={() => dispatch(decrementByAmount(subtractValue))}> - Subtract Amount</button>

                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}

export default Counter;
