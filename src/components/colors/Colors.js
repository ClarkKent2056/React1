
function Colors(props){
    const optionName = props.data.map((nick, i)=> <option key={i}>{nick}</option>)
    return (
    <select>
        <option>Select name</option>
        {optionName}
    </select>
    )
}
export default Colors