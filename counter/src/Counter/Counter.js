import React , {useState} from 'react';

const Counter = () => {
    const [Count, setCount] = useState(0);
    return(
        <div>
            <p>{Count}</p>
            <button onClick = {()=> setCount(Count + 1)} > Add 1</button>
            <button onClick = {()=> setCount(0)}> reset </button>            
        </div>
    )
}

export default Counter;