import { Link, useLoaderData, Form } from "react-router-dom"
import { BookContainer, BookTitle, Genre, Delete, GoBack, DeleteContainer, GoBackContainer } from "../styled-components/Book"
import { Button } from "../components/Update"

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
        <Button/>
        <GoBackContainer>
        <Link to="/">
            <GoBack>Go Back</GoBack>
        </Link>
        </GoBackContainer>
        </>
    )
}

export default Book