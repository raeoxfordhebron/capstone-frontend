import { Link } from "react-router-dom"
import "./Header.css"
import { useState } from "react"

const Header = (props) => {
    const [dropdown, setDropdown] = useState(false)
    return <div className="header-container">
        <nav className="nav-container">
            <Link to="/" className="nav-link">
                <span>Home</span>
            </Link>  
            <Link to="/create"className="nav-link">Create</Link>           
            <Link to="/index" className="nav-link">
                <span>Books</span>
            </Link>
            <Link to="/authors"className="nav-link">
                <span>Authors</span>
            </Link>
        </nav>
    </div>
}

export default Header