import React from "react"

function Tweet({ tweet, tweetList, setTweetList }) {
    const handleDelete = e => {
        e.preventDefault()
        setTweetList(tweetList.filter(obj => obj.id !== tweet.id))
    }

    return (
        <div>
            <h3>{tweet.message}</h3>
            <button>Like</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Tweet
