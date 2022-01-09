import { useState } from "react"
import data from "./commentsData"
import Comment from "./Comment"

function App() {
  const [newComment, setNewComment] = useState("")
  const [allComments, setAllComments] = useState(data)

  const handleNewCommentSubmit = e => {
    e.preventDefault()

    if (newComment) {
      console.log(newComment, "new_comment")
      console.log("", "parent_id")
      setNewComment("")
    }
}

  return (
    <>
    <main className="main">
      <div className="commentsWrapper">
        <div className="addComment">
            <div className="commentImage">
              <img src="/images/userLogo.jpeg" alt="comment-user"></img>
            </div>
            <form onSubmit={handleNewCommentSubmit} className="commentForm">
                <textarea value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Add a comment..."></textarea>
                <button type="submit">Comment</button>
            </form>
        </div>
            
        <div className="commentsList">
            {allComments.length ? (
                allComments.map(item => {
                    return <Comment key={item._id} item={item} />
                })
            ) : (
                <p>No comments</p>
            )}
        </div>
      </div>
    </main>
    <footer>
		  <p>Designed and Coded by <a href="https://amanmaharshi.com" target="_blank">Aman Maharshi</a></p>
	  </footer>
    </>
  )
}

export default App;
