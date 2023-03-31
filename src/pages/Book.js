import { Link, useLoaderData, Form } from "react-router-dom"
import { BookContainer, BookTitle, Genre, UpdateContainer, Update, Delete, GoBack, DeleteContainer, GoBackContainer, SubmitButton } from "../styled-components/Book"

const Book = () => {
    const book = useLoaderData()
    return (<>
        <BookContainer>
            <BookTitle>{book.title}</BookTitle>
            <Genre>{book.genre}</Genre>
            <img src={book.bookimage} alt={book.title}/>

        </BookContainer>
        <DeleteContainer>
        <Form action={`/book/delete/${book.id}`} method="post">
                <Delete>Delete Book</Delete>
            </Form>
        </DeleteContainer>
        <UpdateContainer>
            <h2>Update {book.title}</h2>
            <Form action={`/book/update/${book.id}`} method="post">
                <Update type="text" name="title" placeholder="Update Title Here" defaultValue={book.title}/>
                <Update type="text" name="genre" placeholder="Update Genre Here" defaultValue={book.genre}/>
                <Update type="text" name="image" placeholder="Update Image Here"/>
                <SubmitButton>Submit</SubmitButton>
            </Form>
        </UpdateContainer>
    
        <GoBackContainer>
        <Link to="/">
            <GoBack>Go Back</GoBack>
        </Link>
        </GoBackContainer>
        </>
    )
}

export default Book