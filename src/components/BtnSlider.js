import "./Slider.css"
import leftArrow from "../icons/icons8-left-arrow-96.png"
import rightArrow from "../icons/icons8-right-arrow-96.png"

export default function BtnSlider({direction, moveSlide}) {
    console.log(direction, moveSlide)
    return (
        <button 
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt="right arrow"/>
        </button>
    )
}