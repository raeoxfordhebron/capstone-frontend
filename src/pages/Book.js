import { Link, useLoaderData, Form } from "react-router-dom"
import { BookContainer, BookTitle, Genre } from "../styled-components/Book"

const Book = () => {
    const book = useLoaderData()
    return (<>
        <BookContainer>
            <BookTitle>{book.title}</BookTitle>
            <Genre>{book.genre}</Genre>
            <img src={book.bookimage} alt={book.title}/>

        </BookContainer>
        <div>
            <h2>Update {book.title}</h2>
            <Form action={`/book/update/${book.id}`} method="post">
                <input type="text" name="title" placeholder="Update Title Here" defaultValue={book.title}/>
                <input type="text" name="genre" placeholder="Update Genre Here" defaultValue={book.genre}/>
                <input type="text" name="image" placeholder="Update Image Here"/>
                <button>Submit</button>
            </Form>
            <Form action={`/book/delete/${book.id}`} method="post">
                <button>Delete Book</button>
            </Form>
        </div>
        <Link to="/">
            <button>Go Back</button>
        </Link>
        </>
    )
}

export default Book