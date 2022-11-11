import React, {useState} from "react";

export const Counter = () => {

    let [count, setCount] = useState(0);

    const increment = () => {
        count += 1;
        setCount(count)
    }

    const decrement = () => {
        count -= 1;
        setCount(count);
    }

    const resetCounter = () => {
        count = 0;
        setCount(count);
    }

    return (
        <div>
            <ul>
                <li><b><span>{count}</span></b></li>
                <li style={{display: 'flex', columnGap: '15px', justifyContent: 'center', marginTop: '25px'}}>
                    <button onClick={increment}>Plus</button>
                    <button onClick={resetCounter}>Reset</button>
                    <button onClick={decrement}>Minus</button>
                </li>
            </ul>
        </div>
    )

}