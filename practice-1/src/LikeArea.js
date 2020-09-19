import React, { useState } from "react"

function LikeArea() {
    const [counter, setCounter] = useState(2)

    function handleLike() {
        setCounter(prev => {
            if (prev < 10) {
                return prev + 1
            } else {
                return prev
            }
        })
    }

    return (
        <div className="like">
            <span>
                <button onClick={handleLike}>Like</button>
            </span>
            This page has been liked {counter} times.
        </div>
    )
}

export default LikeArea
