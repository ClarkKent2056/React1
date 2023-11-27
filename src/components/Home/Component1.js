import {useState} from 'react'
export const Component1 = () => {
    const [value, setValue] = useState('')
    // console.log('Component1');
    const change = e => setValue(e.target.value);
    return <div>
        <hr/>
        <input onChange={change} value={value}/>
        <hr/>
    </div>

}