import React, { useState } from "react"
import data from "./data"

function App() {
    const [reviews] = useState(data)
    const [currentIndex, setCurrentIndex] = useState(0)

    const { id, image, job, name, text } = reviews[currentIndex]

    const nextReview = () => {
        setCurrentIndex(currentValue => {
            if (currentIndex === reviews.length - 1) {
                return 0
            }
            return currentValue + 1
        })
    }

    const prevReview = () => {
        setCurrentIndex(currentValue => {
            if (currentIndex === 0) {
                return reviews.length - 1
            }
            return currentValue - 1
        })
    }

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
                    <button onClick={prevReview}>Prev</button>
                    <button onClick={nextReview}>Next</button>
                </div>
            </div>
            <footer>
                <p>
                    Coded by{" "}
                    <a href="https://amanmaharshi.com" rel="noreferrer" target="_blank">
                        Aman Maharshi
                    </a>{" "}
                </p>
            </footer>
        </div>
    )
}

export default App
