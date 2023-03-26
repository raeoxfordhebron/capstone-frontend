import { useLoaderData, Form, Link } from "react-router-dom"
import { useState } from "react"
import BtnSlider from "../components/BtnSlider"
import Slider from "../components/Slider"


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
<Slider books={books}/>
    </>
}

export default Index