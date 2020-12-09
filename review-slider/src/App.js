import React, { useState } from "react"
import data from "./data"

function App() {
    const [reviews, setReview] = useState(data)
    const [currentIndex, setCurrentIndex] = useState(0)

    const { id, image, job, name, text } = reviews[currentIndex]

    return (
        <div>
            <h1>Reviews</h1>
            <div className="review-card">
                <p>{name}</p>
                <p>{job}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default App
