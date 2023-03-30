import { redirect } from "react-router-dom";

const url = "https://capstone-backend-072l.onrender.com"

export const createBookAction = async ({request}) => {
    const formData = await request.formData()
    const newBook = {
        title: formData.get("title"),
        genre: formData.get("genre"),
        image: formData.get("image")
    }
    await fetch(url + "/books/create", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    })
    return redirect("/")
}

export const updateBookAction = async ({request, params}) => {
    const formData = await request.formData()
    const id = params.id
    const updatedBook = {
        title: formData.get("title"),
        genre: formData.get("genre"),
        image: formData.get("image")
    }
    await fetch(url + `/books/${id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBook)
    })
    return redirect(`/book/${id}`)
}

export const deleteBookAction = async ({params}) => {
    const id = params.id
    await fetch(url + `/books/${id}`, {
        method: "delete",
    })
    return redirect("/")
}

export const createAuthorAction = async ({request}) => {
    const formData = await request.formData()
    const newAuthor = {
        name: formData.get("name"),
        image: formData.get("image")
    }
    await fetch(url + "/author/create", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAuthor)
    })
    return redirect("/")
}

export const updateAuthorAction = async ({request, params}) => {
    const formData = await request.formData()
    const id = params.id
    const updatedAuthor = {
        name: formData.get("name"),
        image: formData.get("image")
    }
    await fetch(url + `/author/update/${id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedAuthor)
    })
    return redirect(`/author/${id}`)
}

export const deleteAuthorAction = async ({params}) => {
    const id = params.id
    await fetch(url + `/author/delete/${id}`, {
        method: "delete",
    })
    return redirect("/")
}