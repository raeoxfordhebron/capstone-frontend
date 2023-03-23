import { Link, useLoaderData } from "react-router-dom"

const Book = () => {
    const book = useLoaderData()
    return (
        <div>
            <Link to ={`/book/${book.id}`}>
                <h1>{book.title}</h1>
            </Link>
        </div>
    )
}

export default Book