import { useLoaderData, Form, Link } from "react-router-dom"

const Index = (props) => {
    const books = useLoaderData()
    return <>
    <div>
        <h2>Create a Book</h2>
        <Form action="/book/create" method="post">
            <input type="text" name="title" placeholder="Write Title Here"/>
            <input type="text" name="genre" placeholder="Write Genre Here"/>
            <input type="text" name="image" placeholder="Enter Image Here"/>
            <button>Submit</button>
        </Form>
    </div>
    {books.map((book) => {
        return (
            <>
            <Link to={`/book/${book.id}`}>
            <h1>{book.title}</h1>
            </Link>
            <div>{book.genre}</div>
            </>
        )
    })}
    </>
}

export default Index