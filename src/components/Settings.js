import { useEffect, useState } from "react";

const Settings = () => {
    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(4)
  console.log("render");
  useEffect(() => {
    console.log("useEffect");
  }, [num1]);
  return <div>
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
