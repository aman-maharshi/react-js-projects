import React from "react"

function Tweet({ value }) {
    return (
        <div>
            <h3>{value}</h3>
            <button>Like</button>
            <button>Delete</button>
        </div>
    )
}

export default Tweet
