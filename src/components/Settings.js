import { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";


const Settings = () => {
  const store = useContext(Context)
  // console.log(store);
  const changeBgRed = () => store.change.changeThemeBg('red')
  const changeBgGreen = () => store.change.changeThemeBg('green')
    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(4)
  // console.log("render");
  useEffect(() => {
    // console.log("useEffect");
  }, [num1]);
  return <div style={{background : store.theme.bg}}>
   <button onClick={changeBgRed} >red</button>
   <button onClick={changeBgGreen} >green</button>

    <button onClick={() => setNum1(num1 - 1)}>+</button>
    <p>{num1}</p>
    <button  onClick={() => setNum1(num1 + 1)}>-</button>
    <hr/>
    <button onClick={() => setNum2(num2 - 1)}>+</button>
    <p>{num2}</p>
    <button  onClick={() => setNum2(num2 + 1)}>-</button>
    Settings
  
    </div>;
};
export default Settings;
