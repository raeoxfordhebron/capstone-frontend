import { useLoaderData, Form, Link } from "react-router-dom"
import { useState } from "react"
import BtnSlider from "../components/BtnSlider"
import Slider from "../components/Slider"
import { Title } from "../styled-components/Index"


const Index = (props) => {
    const books = useLoaderData()
    return <>
    <Title>Books</Title>
<Slider books={books}/>
    </>
}

export default Index