import React, { useEffect } from "react"

function Posts({ post, loading }) {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <ul>
            {post.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}

export default Posts
