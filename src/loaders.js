import { url } from "./url";

// indexLoader
export const indexLoader = async () => {
    const bookResponse = await fetch(url + "/books/")
    const authorResponse = await fetch(url + "/authors/")
    const books = await bookResponse.json()
    const authors = await authorResponse.json()
    return {books, authors}
}

// Book showLoader
export const bookShowLoader = async () => {
    const response = await fetch(url + `/books/${params.id}`)
    const book = await response.json()
    return book
}

// Author showLoader
export const authorShowLoader = async () => {
    const response = await fetch(url + `/authors/${params.id}`)
    const author = await response.json()
    return author
}

