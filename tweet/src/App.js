import React, { useState } from "react"
import TweetList from "./components/TweetList"
import CreateTweet from "./components/CreateTweet"

function App() {
    const [newTweet, setNewTweet] = useState("")
    const [tweetList, setTweetList] = useState([])

    return (
        <div>
            <h1>Create Tweet</h1>
            <CreateTweet newTweet={newTweet} setNewTweet={setNewTweet} tweetList={tweetList} setTweetList={setTweetList} />
            <TweetList tweetList={tweetList} setTweetList={setTweetList} />
        </div>
    )
}

export default App
