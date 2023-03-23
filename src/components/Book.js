import { Link } from "react-router-dom"

const Book = ({book}) => {
    return (
        <div>
            <Link to ={`/books/${book.id}`}>
                <h1>{book.title}</h1>
            </Link>
        </div>
    )
}

export default Book