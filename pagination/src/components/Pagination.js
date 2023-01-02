import React from "react"

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="pagination">
            {pageNumbers.map(item => (
                <div key={item} className="paginationButton" onClick={() => paginate(item)}>
                    {item}
                </div>
            ))}
        </div>
    )
}

export default Pagination
