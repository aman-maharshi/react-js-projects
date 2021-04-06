import React, { useState } from "react"
import imageData from "./data"

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
            <div className="nav-buttons">
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    )
}

export default App
