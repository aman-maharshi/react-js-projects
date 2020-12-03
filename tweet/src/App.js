import React, { useState } from "react"
import TweetList from "./components/TweetList"
import CreateTweet from "./components/CreateTweet"
import Footer from "./components/Footer"

function App() {
    const [newTweet, setNewTweet] = useState("")
    const [tweetList, setTweetList] = useState([{ id: "abc-def", message: "Saw a great movie yesterday!" }])

    return (
        <div className="main-wrapper">
            <h1>Home</h1>
            <CreateTweet newTweet={newTweet} setNewTweet={setNewTweet} tweetList={tweetList} setTweetList={setTweetList} />
            <TweetList tweetList={tweetList} setTweetList={setTweetList} />
            <Footer />
        </div>
    )
}

export default App
