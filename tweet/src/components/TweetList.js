import React from "react"
import Tweet from "./Tweet"

function TweetList({ tweetList }) {
    return (
        <div>
            {tweetList.map((item, index) => {
                return <Tweet key={index} value={item} />
            })}
        </div>
    )
}

export default TweetList
