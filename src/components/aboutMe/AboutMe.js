import { Context } from "../../store/context";
import { ButtonC } from "./ButtonC";
import { AboutElement } from "./aboutElement";
import {useContext, useState} from 'react'


const AboutMe = () => {
const store = useContext(Context)
const [value, setValue] = useState('')
const [count, setCount] = useState(1)
const change = e => setValue(e.target.value);
const log = () => console.log(value);
const plusCount = () => setCount(count + 1)
const minusCount = () => setCount(count - 1)
//  console.log('AboutMe render');
    return (
        <div style={{background : store.theme.bg}}>
             <AboutElement change={change}/>
             <button onClick={log}>log</button>
             <hr/>
             <button onClick={minusCount}>-</button>
             <ButtonC count={count}/>
             <button onClick={plusCount}>+</button>
        </div>
    )
}
export default AboutMe;



// ouside render 
// inside render