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
                        <article>
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
