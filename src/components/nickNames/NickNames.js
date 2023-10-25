import { useState } from 'react';
import "./style.css";
function NickNames(props) {
  const [name, setName] = useState('');
  const checkNick = (e)=> setName(e.target.value);
  const optionName = props.data.map((nick, i) => (<option value={nick} key={i}>{nick}</option>));
  return (
    <div className="dispFlex">
      <select onChange={checkNick} value={name}>
        <option value=''>Select name</option>
        {optionName}
      </select>
      <h4>{name}</h4>
    </div>
  );
}
export default NickNames;
