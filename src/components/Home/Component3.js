import {useState} from 'react'
export const Component3 = (props) => {
    // console.log('Component3');
    return <div>
        <hr/>
        <input onChange={props.change} value={props.value}/>
        <hr/>
    </div>

}