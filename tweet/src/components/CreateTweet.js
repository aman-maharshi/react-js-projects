import React from "react"
import { v4 as uuidv4 } from "uuid"

function CreateTweet({ newTweet, setNewTweet, tweetList, setTweetList }) {
    const handleInputChange = e => {
        setNewTweet(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (newTweet) {
            setTweetList([...tweetList, { id: uuidv4(), message: newTweet }])
        }
        setNewTweet("")
    }

    return (
        <form className="create-tweet">
            <textarea onChange={handleInputChange} cols="50" rows="3" value={newTweet} placeholder="What's Happening?"></textarea>
            <button onClick={handleSubmit}>Tweet</button>
        </form>
    )
}

export default CreateTweet
