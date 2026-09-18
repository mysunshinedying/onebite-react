import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(prevState => prevState + 1);
            }} className="button">
                +
            </button>
        </div>
    )
};

export default Counter;
