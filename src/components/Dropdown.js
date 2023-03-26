import { Link } from "react-router-dom"
import { DropdownContainer, MenuItems, NavLink } from "../styled-components/Dropdown"

const Dropdown = ({dropdown}) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            <li className="menu-items">
                <NavLink to="/book/create">
                    <span>Book</span>
                </NavLink>
                <NavLink to="/author/create">
                    <span>Author</span>
                </NavLink>
            </li>
        </ul> 
    )
}

export default Dropdown