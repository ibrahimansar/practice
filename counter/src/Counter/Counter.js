import React , {useState} from 'react';
import './Counter.css';

const Counter = () => {
    const [Count, setCount] = useState(0);
    return(
        <div>
            <h1>{Count}</h1>
            <div >
                <button className="count_button" onClick = {()=> setCount(Count + 1)} > Count</button>
                <button className="reset_button" onClick = {()=> setCount(0)}> reset </button>
            </div>            
        </div>
    )
}

export default Counter;