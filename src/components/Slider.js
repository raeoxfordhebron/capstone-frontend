import { useState } from "react";
import BtnSlider from "./BtnSlider";
import { Link } from "react-router-dom";

export default function Slider({books}) {
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if(slideIndex !== books.length){
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === books.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1){
            setSlideIndex(books.length)
        }
    }
    const moveDot = (index) => {
        setSlideIndex(index)
    }
    return (<>
        <div className="container-slider">
         {books.map((book, index) => {
            return (
            <>
                <div key={book.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                <Link to={`/book/${book.id}`}>
                <h1>{book.title}</h1>
                </Link>
                <div>{book.genre}</div>
                <img src={book.image} alt={book.title}/>
                </div>
            </>
        )
    })}
        </div>
        <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        <div className="container-dots">
            {Array.from({length: 5}).map((item, index) => (<div className={slideIndex === index + 1 ? "dot active" : "dot"}
            onClick={() => moveDot(index + 1)}
            ></div>))}
        </div>
        </>
    )
}
