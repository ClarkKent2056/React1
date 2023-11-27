import { Context } from "../../store/context"
import { Component1 } from "./Component1"
import { Component2 } from "./Component2"
import { Component3 } from "./Component3"
import {useState,useMemo,useCallback, useContext} from 'react'


export const Home = () => {
    const store = useContext(Context)
    console.log(store);
    const [count, setCount] = useState(1)
    // --------
    const [value2, setValue2] = useState('')

    const change2 = useCallback(e => setValue2(e.target.value), [count])
    // --------------------------
    const [value3, setValue3] = useState('')
    const change3 =  e => setValue3(e.target.value);
    // ----------------
    const render = () => setCount(count + 1)
    const component1 = useMemo( () => <Component1/>, [] )
    const component2 = useMemo( () => <Component2 value={value2} change={change2} />, [value2] )
    const component3 = useMemo( () => <Component3 value={value3} change={change3} />, [value3] )
    // console.log('Home');
    return (
        <div>
            <button onClick={render}>render</button>
            {component1}
            {component2}
            {component3}

        </div>
    )
}

// block render useMemo memo useCallback 

// useMemo use in parrent for block outside render
// useMemo( () => {}, [] )

// useCallback use for block render function (new create function)
// useCallback( () => {}, [] )


// memo HOC 
// for block render ouside, use in current compont
// memo(Component, memoFun)
// const memoFun = (prevProps, nextProps) => {};

// useEffect(() => {}, [])
// useEffect work after montirovanie component
// new render useEffect if element from array update
//! Important
// useState
// useEffect
// useCallback
// useMemo
// useRef
// ! Easy for understand
// useTransition

//! хард
// useContext 
// useReducer
// useImperativeHandle
// useSyncExternalStore

//! Is not important
// useInsertionEffect
// useLayoutEffect
// useDebugValue
// useDeferredValue
// useId
