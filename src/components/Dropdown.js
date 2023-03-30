import { useState, useEffect } from "react"
import CreateAuthor from "./CreateAuthor"
import CreateBook from "./CreateBook"
import { CreateContainer, Label, CreateChoice } from "../styled-components/Dropdown"

const Dropdown = ({dropdown}) => {
    const [value, setValue] = useState('book')

    const [authorContent, setAuthorContent] = useState(false)
    const [bookContent, setBookContent] = useState(false)

    useEffect(() => {
        value === "book" ? setBookContent(true) : setBookContent(false)
        value === "author" ? setAuthorContent(true) : setAuthorContent(false)
    }, [value])

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (<>
        <CreateContainer>
            <Label>Create</Label>
            <CreateChoice value={value} onChange={handleChange}>
                <option value="book">Book</option>
                <option value="author">Author</option>
            </CreateChoice>
        </CreateContainer>
        <div>
            {authorContent && <CreateAuthor/>}
            {bookContent && <CreateBook/>}
        </div>
        </>
    )
}

export default Dropdown