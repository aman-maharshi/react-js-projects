import { useState, useRef, useCallback } from "react"
import useBookSearch from "./useBookSearch"

const App = () => {
    const [query, setQuery] = useState("Woods")
    const [pageNumber, setPageNumber] = useState(1)

    const { loading, error, books, hasMore } = useBookSearch(query, pageNumber)

    const handleSearchInputChange = (e) => {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    // INFINITE SCROLLING USING REF, USECALLBACK AND INTERSECTION OBSERVER
    const observer = useRef()
    const lastBookElementRef = useCallback(
        (node) => {
            console.log("Last Book: ", node)

            // if loading then we dont want to trigger infinite scrolling
            if (loading) return

            if (observer.current) {
                observer.current.disconnect()
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    console.log("visible")
                    setPageNumber((prevPageNumber) => prevPageNumber + 1)
                }
            })

            if (node) {
                observer.current.observe(node)
            }
        },
        [loading, hasMore]
    )

    return (
        <section>
            <input
                type="text"
                value={query}
                onChange={handleSearchInputChange}
                placeholder="Search"
            />
            <div>
                {books.map((item, index) => {
                    if (books.length === index + 1) {
                        return (
                            <h3 ref={lastBookElementRef} key={index}>
                                {item.title} ({item.first_publish_year})
                            </h3>
                        )
                    } else {
                        return (
                            <h3 key={index}>
                                {item.title} ({item.first_publish_year})
                            </h3>
                        )
                    }
                })}

                {loading && <h3>Loading...</h3>}
                {error && <h3>Error...</h3>}
                {!loading && books.length === 0 && <h3>No Data</h3>}
            </div>
        </section>
    )
}

export default App
