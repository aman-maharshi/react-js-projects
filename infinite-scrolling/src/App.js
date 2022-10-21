import { useState, useEffect } from "react"
import useBookSearch from "./useBookSearch"

const App = () => {
    const [query, setQuery] = useState("woods")
    const [pageNumber, setPageNumber] = useState(1)

    const { loading, error, books, hasMore } = useBookSearch(query, pageNumber)

    const handleSearchInputChange = (e) => {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    return (
        <section>
            <input
                type="text"
                value={query}
                onChange={handleSearchInputChange}
                placeholder="Search"
            />
            <div>
                {books.map((item) => {
                    return (
                        <h3 key={item}>
                            {item.title} ({item.first_publish_year})
                        </h3>
                    )
                })}

                {loading && <h3>Loading...</h3>}
                {error && <h3>Error...</h3>}
                {!loading && books.length === 0 && <h3>No Data</h3>}
            </div>
        </section>
    )
}

export default App
