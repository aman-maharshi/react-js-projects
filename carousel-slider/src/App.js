import React, { useState, useEffect } from "react"
import imageData from "./data"
import { GrPrevious, GrNext } from "react-icons/gr"

function App() {
    const [data, setData] = useState(imageData)
    const [dataIndex, setDataIndex] = useState(0)

    const handleNextClick = () => {
        if (dataIndex < data.length - 1) {
            setDataIndex(dataIndex + 1)
        } else {
            setDataIndex(0)
        }
    }

    const handlePrevClick = () => {
        if (dataIndex > 0) {
            setDataIndex(dataIndex - 1)
        }
        if (dataIndex === 0) {
            setDataIndex(data.length - 1)
        }
    }

    // // auto Slide after 3 seconds
    // // running it the first time page loads and everytime after dataIndex is changed
    // useEffect(() => {
    //     let autoSlide = setInterval(() => {
    //         handleNextClick()
    //     }, 3000)

    //     return () => {
    //         clearInterval(autoSlide)
    //     }
    // }, [dataIndex])

    return (
        <div className="slider">
            <div className="slider__wrapper">
                {data.map((item, index) => {
                    const { title, image } = item
                    // default location
                    let position = "nextSlide"

                    if (index === dataIndex) {
                        position = "activeSlide"
                    }

                    let lastArrayItem = dataIndex === 0 && index === data.length - 1

                    if (index === dataIndex - 1 || lastArrayItem) {
                        position = "prevSlide"
                    }

                    return (
                        <article className={position} key={index}>
                            <img src={image} alt={title} />
                            <p className="title">{title}</p>
                        </article>
                    )
                })}
            </div>
            <button className="prevButton" onClick={handlePrevClick}>
                <GrPrevious />
            </button>
            <button className="nextButton" onClick={handleNextClick}>
                <GrNext />
            </button>
        </div>
    )
}

export default App
