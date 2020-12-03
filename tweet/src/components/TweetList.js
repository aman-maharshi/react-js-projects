import React from "react"
import Tweet from "./Tweet"

function TweetList({ tweetList, setTweetList }) {
    return (
        <div>
            {tweetList.map(item => {
                return <Tweet key={item.id} tweet={item} tweetList={tweetList} setTweetList={setTweetList} />
            })}
        </div>
    )
}

export default TweetList
