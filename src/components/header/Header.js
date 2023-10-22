function Header(props){
    // console.log(props);
    return <header>
        <h2>Name : {props.name}</h2>
        <p>password : {props.password}</p>
       <hr/>
    </header>
}
export default Header