import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);
    return (
        <div data-test="component-app">
            <h1 data-test="counter display">{`The Count is ${count}`}</h1>
            <button data-test="increment-button" onClick={() => setCount(count + 1)}>Increment counter</button>
            <button onClick={() => count > 0 ? setCount(count - 1) : setCount(0)}>Decrement counter</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter