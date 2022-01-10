import { useState } from "react"

const Comment = ({ item, allComments, setAllComments }) => {
    const { _id, description, child_comments, parent_id } = item

    const [reply, setReply] = useState("")
    const [showReplyForm, setShowReplyForm] = useState(false) 

    const toggleReplyForm = () => {
        setShowReplyForm(!showReplyForm)
    }

    const handleReplySubmit = e => {
        e.preventDefault()

        if (reply) {
            const newCommentData = {
                description: reply,
                parent_id: _id,
                _id: Math.floor(Math.random() * 99999)
            }
            console.log(_id, "_id")
            console.log(parent_id, "parent_id")
        
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
                        <Comment key={nestedItem._id} item={nestedItem} allComments={allComments} setAllComments={setAllComments} />
                    ))}
                </div>
            ) : null}
        </>
    )
}

export default Comment
