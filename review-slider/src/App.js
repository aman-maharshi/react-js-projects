import React, { useState } from "react"
import data from "./data"

function App() {
    const [reviews, setReview] = useState(data)
    const [currentIndex, setCurrentIndex] = useState(0)

    const { id, image, job, name, text } = reviews[currentIndex]

    return (
        <div>
            <h1>Testimonials</h1>
            <div className="review-card">
                <div className="content-box">
                    <div className="image">
                        <img src={image} alt={id} />
                    </div>
                    <div className="text">
                        <p className="name">{name}</p>
                        <p className="role">{job}</p>
                        <p className="review">{text}</p>
                    </div>
                </div>
                <div className="button-box">
                    <button>Prev</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    )
}

export default App
