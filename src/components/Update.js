import { useState, useEffect } from "react";
import { useLoaderData, Form } from "react-router-dom";
import "./Update.css"

export const Button = (props) => {
    const [value, setValue] = useState(false)
    const book = useLoaderData()
    const handleClick = () => {
        setValue(!value)
    }

    const data = useLoaderData()
    return <>
    <div className="update-button-container">
    <button className="update-button" onClick={handleClick}>Update</button>
    </div>
    <div className={value? "update-container-open" : "update-container-closed"}>
    <h2>Update {book.title}</h2>
    <Form action={`/book/update/${book.id}`} method="post">
    <input className="update-input" type="text" name="title" placeholder="Update Title Here" defaultValue={book.title}/>
    <input className="update-input" type="text" name="genre" placeholder="Update Genre Here" defaultValue={book.genre}/>
    <input className="update-input" type="text" name="image" placeholder="Update Image Here"/>
    <button className="submit-button">Submit</button>
    </Form>
    </div>
    
    </>    
}