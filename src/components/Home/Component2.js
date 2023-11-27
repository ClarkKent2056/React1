import {useState} from 'react'
export const Component2 = (props) => {
    // console.log('Component2');
   
    return <div>
        <hr/>
        <input onChange={props.change} value={props.value}/>
        <hr/>
    </div>

}