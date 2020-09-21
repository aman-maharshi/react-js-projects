import React, { useState } from "react"

function LikeArea() {
    const [like, setLike] = useState(3)

    function handleLike() {
        setLike(prev => prev + 1)
    }

    return (
        <p className="LikeArea">
            This page has been liked {like} times <button onClick={handleLike}>Like</button>
        </p>
    )
}

export default LikeArea
