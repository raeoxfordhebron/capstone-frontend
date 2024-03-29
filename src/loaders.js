const url = "https://capstone-backend-072l.onrender.com"

// indexLoader
export const bookIndexLoader = async () => {
    const bookResponse = await fetch(url + "/books")
    const books = await bookResponse.json()
    return books
}

export const authorIndexLoader = async () => {
    const authorResponse = await fetch(url + "/authors")
    const authors = await authorResponse.json()
    return authors
}

// Book showLoader
export const bookShowLoader = async ({params}) => {
    const response = await fetch(url + `/books/${params.id}`)
    console.log(response)
    const book = await response.json()
    console.log(book)
    return book
}

// Author showLoader
export const authorShowLoader = async ({params}) => {
    const response = await fetch(url + `/authors/${params.id}`)
    const author = await response.json()
    return author
}

