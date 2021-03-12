import React, { useState } from "react"
import imageData from "./data"

function App() {
    const [data, setData] = useState(imageData)

    return (
        <div className="slider">
            <div className="slider__wrapper">
                {data.map(item => {
                    const { title, image } = item
                    return (
                        <div className="slider__content">
                            <img src={image} alt={title} />
                            <span className="title">{title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App
