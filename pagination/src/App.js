import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import Posts from "./components/Posts"

function App() {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true)
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPost(response.data)
            setLoading(false)
        }
        fetchPosts()
    }, [])

    console.log(post)

    return (
        <div className="container">
            <h1>Simple Pagination in React</h1>
            <Posts post={post} loading={loading} />
        </div>
    )
}

export default App
