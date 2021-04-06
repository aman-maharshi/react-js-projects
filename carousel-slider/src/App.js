import React, { useState } from "react"
import imageData from "./data"
import { GrPrevious, GrNext } from "react-icons/gr"

function App() {
    const [data, setData] = useState(imageData)
    const [index, setIndex] = useState(0)

    return (
        <div className="slider">
            <div className="slider__wrapper">
                {data.map((item, index) => {
                    const { title, image } = item
                    return (
                        <article key={index}>
                            <img src={image} alt={title} />
                            <p className="title">{title}</p>
                        </article>
                    )
                })}
            </div>
            <button className="prevButton">
                <GrPrevious />
            </button>
            <button className="nextButton">
                <GrNext />
            </button>
        </div>
    )
}

export default App
