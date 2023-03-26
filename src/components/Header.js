import { Link } from "react-router-dom"
import { HeaderContainer, NavContainer, NavLink } from "../styled-components/Header"
import { useState } from "react"

const Header = (props) => {
    const [dropdown, setDropdown] = useState(false)
    return <HeaderContainer>
        <NavContainer>
            <Link to="/">
                <span>Home</span>
            </Link>             
            <Link to="/index">
                <span>Books</span>
            </Link>
            <Link to="/authors">
                <span>Authors</span>
            </Link>
        </NavContainer>
    </HeaderContainer>
}

export default Header