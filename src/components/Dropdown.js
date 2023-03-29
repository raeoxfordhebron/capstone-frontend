import { Link } from "react-router-dom"
import { DropdownContainer, MenuItems, NavLink } from "../styled-components/Dropdown"
import { useState } from "react"

const Dropdown = ({dropdown}) => {
    const [value, setValue] = useState('book')
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <div>
            <label>Create</label>
            <select value={value} onChange={handleChange}>
                <option value="book">Book</option>
                <option value="author">Author</option>
            </select>
        </div>
    )
}

export default Dropdown