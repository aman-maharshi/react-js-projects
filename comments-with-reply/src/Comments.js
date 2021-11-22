import { useState } from "react"
import data from "./data"

const Comments = ({ userId }) => {
    const [comments, setComments] = useState(data)
    const rootComments = comments.filter(item => item.parentId === null)

    const getReplies = commentId => {
        const replies = comments.filter(item => item.parentId === commentId)
        return replies
    }

    return (
        <div>
            {rootComments.map(item => {
                const { id, body, username, userId, createdAt } = item

                const date = new Date(createdAt)
                const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

                return (
                    <div key={id}>
                        <div className="commentRow">
                            <div className="commentHeader">
                                <h3>{username}</h3>
                                <p>{formattedDate}</p>
                            </div>
                            <p>{body}</p>
                        </div>
                        <div className="replyRow">
                            {getReplies(id).map(reply => {
                                return (
                                    <div key={reply.id} className="commentRow">
                                        <h3>{reply.username}</h3>
                                        <p>{reply.body}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Comments
