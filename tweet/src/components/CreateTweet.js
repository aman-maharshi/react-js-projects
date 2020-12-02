import React from "react"

function CreateTweet({ newTweet, setNewTweet, tweetList, setTweetList }) {
    const handleInputChange = e => {
        setNewTweet(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setTweetList([...tweetList, newTweet])
        setNewTweet("")
    }

    return (
        <form>
            <textarea onChange={handleInputChange} cols="50" rows="5" value={newTweet}></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default CreateTweet
