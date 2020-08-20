import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import Posts from "./components/Posts"
import Pagination from "./components/Pagination"

function App() {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true)
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPost(response.data)
            setLoading(false)
        }
        fetchPosts()
    }, [])

    const indexOfLastPost = currentPage * postsPerPage // 10
    const indexOfFirstPost = indexOfLastPost - postsPerPage // 0
    const currentPost = post.slice(indexOfFirstPost, indexOfLastPost)

    function paginate(item) {
        setCurrentPage(item)
    }

    return (
        <div className="container">
            <h1>Simple Pagination in React</h1>
            <p className="desc">
                Fetching the following posts form <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a> API
            </p>
            <Posts post={currentPost} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={post.length} paginate={paginate} />
        </div>
    )
}

export default App
