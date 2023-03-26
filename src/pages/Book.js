import { Link, useLoaderData, Form } from "react-router-dom"

const Book = () => {
    const book = useLoaderData()
    return (<>
        <div>
            <Link to ={`/book/${book.id}`}>
                <h1>{book.title}</h1>
            </Link>
            
        </div>
        <div>
            <h2>Update a Book</h2>
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