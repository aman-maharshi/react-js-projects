import React from "react"

function Posts({ post, loading }) {
    if (loading) {
        return <div className="loading">Loading...</div>
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
