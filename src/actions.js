import { redirect } from "react-router-dom";

const url = "https://capstone-backend-072l.onrender.com"

export const createBookAction = async ({request}) => {
    const formData = await request.formData()
    const newBook = {
        title: formData.get("title"),
        genre: formData.get("genre"),
        image: formData.get("image")
    }
    await fetch(url + "/book/create", {
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
    await fetch(url + `/book/update/${id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBook)
    })
    return redirect(`/book/${id}`)
}