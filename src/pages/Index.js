import Book from "../components/Book"
import Author from "../components/Author"
import { useLoaderData } from "react-router-dom"

const Index = (props) => {
    const books = useLoaderData()
    return books.map((book) => <Book book={book} key={book.id}/>)
}

export default Index