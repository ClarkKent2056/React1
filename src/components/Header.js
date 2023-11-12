// import Home from "./Home";
// import AboutMe from "./AboutMe";
// import Settings from "./Settings";

import { Link, NavLink } from "react-router-dom";



const Header = () => {
    const classLink = ({ isActive, isPending }) => {
        return  isActive ? 'active' : 'noActive'
    }
    return (
        <header className="w100 header">
            <Link to="/">Home</Link>
            <Link to="/aboutMe">About me</Link>
            <Link to="/settings">Settings</Link>
            <NavLink className={classLink} to="/todo">todo</NavLink>
            <Link to="/todoEffect">TodoEffect</Link>
        </header>
    )

}
export default Header;