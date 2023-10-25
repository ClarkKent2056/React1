import React from 'react'

export const Task = (props) => {
  const removeEl = () => props.removeElem(props.id)
   
  return (
    <div className='displayflex' >
        <input type='checkbox' checked={props.isActive} onChange={() => {}}/>
        <h4>{props.text}</h4>
        <button onClick={removeEl}>X</button>
    </div>
  )
}
