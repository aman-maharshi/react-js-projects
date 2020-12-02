import React from "react"

function Tweet({ id, value, tweetList, setTweetList }) {
    const handleDelete = e => {
        e.preventDefault()
        const tweets = [...tweetList]
        tweets.splice(id, 1)
        setTweetList(tweets)
    }

    return (
        <div>
            <h3>{value}</h3>
            <button>Like</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Tweet
