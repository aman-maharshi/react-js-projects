import React, { useState, useEffect } from "react"
import axios from "axios"
import Pagination from "./Pagination"

const App = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 10

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        setLoading(true)
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPost(response.data)
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    const indexOfLastPost = currentPage * postsPerPage // 10
    const indexOfFirstPost = indexOfLastPost - postsPerPage // 0
    const currentPost = post.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = item => {
        setCurrentPage(item)
    }

    return (
        <div className="container">
            <header>
                <h1>Simple Pagination in React</h1>
                <p className="desc">
                    Fetching the following posts form <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a> API
                </p>
            </header>

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <ul>
                    {currentPost.map(item => (
                        <li key={item.id}>
                            {item.id}. {item.title}
                        </li>
                    ))}
                </ul>
            )}

            <Pagination postsPerPage={postsPerPage} totalPosts={post.length} paginate={paginate} />
        </div>
    )
}

export default App
