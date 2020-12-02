import React from "react"
import Tweet from "./Tweet"

function TweetList({ tweetList, setTweetList }) {
    return (
        <div>
            {tweetList.map((item, index) => {
                return <Tweet key={index} id={index} value={item} tweetList={tweetList} setTweetList={setTweetList} />
            })}
        </div>
    )
}

export default TweetList
