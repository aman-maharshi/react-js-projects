import React from "react"

function Tweet({ tweet, tweetList, setTweetList }) {
    const handleDelete = e => {
        e.preventDefault()
        setTweetList(tweetList.filter(obj => obj.id !== tweet.id))
    }

    return (
        <div className="tweet">
            <div className="pic">
                <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg" alt="user" />
            </div>
            <div>
                <h3>
                    User <span>@username</span>
                </h3>
                <p>{tweet.message}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Tweet
