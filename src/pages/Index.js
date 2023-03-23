import { useLoaderData } from "react-router-dom"

const Index = (props) => {
    const books = useLoaderData()
    return books.map((book) => {
        return (
            <>
            <h1>{book.title}</h1>
            <div>{book.genre}</div>
            </>
        )
    })
}

export default Index