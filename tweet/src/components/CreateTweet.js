import React from "react"

function CreateTweet({ newTweet, setNewTweet, tweetList, setTweetList }) {
    const handleInputChange = e => {
        setNewTweet(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setTweetList([...tweetList, newTweet])
        document.querySelector("#inputForm").reset()
    }

    return (
        <form id="inputForm">
            <textarea onChange={handleInputChange} cols="50" rows="5"></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default CreateTweet
