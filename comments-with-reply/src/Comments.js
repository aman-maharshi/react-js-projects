import { useState } from "react"
import data from "./data"

const Comments = ({ userId }) => {
    const [comments, setComments] = useState(data)

    return (
        <div>
            <p>This is a comment</p>
        </div>
    )
}

export default Comments
