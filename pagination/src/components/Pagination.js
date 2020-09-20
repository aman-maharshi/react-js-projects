import React from "react"

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <ul className="pagination">
            {pageNumbers.map(item => (
                <li key={item}>
                    <a href="#" onClick={() => paginate(item)}>
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Pagination
