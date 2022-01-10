import { useState } from "react"
import data from "./commentsData"
import Comment from "./Comment"

function App() {
  const [newComment, setNewComment] = useState("")
  const [allComments, setAllComments] = useState(data)

  const handleNewCommentSubmit = e => {
    e.preventDefault()

    if (newComment) {
      const newCommentData = {
        description: newComment,
        parent_id: "",
        _id: Math.floor(Math.random() * 99999)
      }

      setAllComments([...allComments, newCommentData])
   
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
                      return <Comment key={item._id} item={item} allComments={allComments} setAllComments={setAllComments} />
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
