import { useState } from 'react';
import NickNames from '../nickNames/NickNames'
import './style.css';

// let num = 10;

function Contact(props){
    const [count, setCount] = useState(10);
// 10, 
    const log_user = () => {
        console.log(props);
    }
    const numPlus = () => {
        setCount(count + 1)
        // count = 50 
        // num++
        // console.log(num);
    };
    const countMins = ()=> setCount(count - 1);
    return <div className='contact-c'>
        <h3>{props.name}</h3>
        <p>{props.phone}</p>
        <button onClick={log_user}>log</button>
        <button onClick={countMins}>-</button>
        <p>{count}</p>
        <button onClick={numPlus}>+</button>
        <NickNames data={props.data}/>
    </div>;
}
export default Contact