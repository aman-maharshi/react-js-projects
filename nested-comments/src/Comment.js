import { useState } from "react"

const Comment = ({ item, getComments }) => {
    const { _id, show_username, description, profile_image_url, engagement, _reacted, child_comments } = item

    const [reply, setReply] = useState("")
    const [showReplyForm, setShowReplyForm] = useState(false) 

    const toggleReplyForm = () => {
        setShowReplyForm(!showReplyForm)
    }

    const handleReplySubmit = e => {
        e.preventDefault()

        if (reply) {
            console.log(reply, "reply")
            console.log(_id, "parent_id")
            
            setReply("")
            toggleReplyForm()
        }
    }

    return (
        <>
            <div className="singleComment">
                <div className="singleCommentImage">
                    <img src="/images/userLogo.jpeg" alt="comment-user"></img>
                </div>
                <div className="commentContent">
                    <div className="titleRow">
                        <p>@user</p>
                    </div>
                    <p className="mainContent">{description}</p>
                    <div className="actionRow">
                        <button onClick={toggleReplyForm}>Reply</button>
                    </div>
                </div>
                
            </div>

            {showReplyForm && (
                <div className="replyWrapper">
                    <div className="addComment">
                        <div className="commentImage">
                            <img src="/images/userLogo.jpeg" alt="comment-user"></img>
                        </div>
                        <form className="commentForm" onSubmit={handleReplySubmit}>
                            <textarea value={reply} onChange={e => setReply(e.target.value)} placeholder="Add a reply..."></textarea>
                            <button type="submit">Reply</button>
                        </form>
                    </div>
                </div>
            )}

            {child_comments && child_comments.length ? (
                <div className="childCommentWrapper">
                    {child_comments.map(nestedItem => (
                        <Comment key={nestedItem._id} item={nestedItem} getComments={getComments} />
                    ))}
                </div>
            ) : null}
        </>
    )
}

export default Comment
