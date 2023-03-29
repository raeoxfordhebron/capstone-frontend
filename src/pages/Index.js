import { useLoaderData, Form, Link } from "react-router-dom"
import { useState } from "react"
import BtnSlider from "../components/BtnSlider"
import Slider from "../components/Slider"


const Index = (props) => {
    const books = useLoaderData()
    return <>
<Slider books={books}/>
    </>
}

export default Index