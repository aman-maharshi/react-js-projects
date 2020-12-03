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
        <form>
            <textarea onChange={handleInputChange} cols="50" rows="5" value={newTweet}></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default CreateTweet
