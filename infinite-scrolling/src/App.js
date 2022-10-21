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
            // console.log("Last Book: ", node)

            // if loading then we dont want to trigger infinite scrolling
            if (loading) return

            if (observer.current) {
                observer.current.disconnect()
            }

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    // console.log("visible")
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
        <section className="md:w-8/12 mx-auto p-4">
            <h1 className="text-center font-bold text-4xl my-4 tracking-wide">
                BOOKS
            </h1>
            <p className="text-center mb-4">
                API might take up to a minute to load the data.
            </p>
            <div className="bg-white shadow-xl p-2 text-xl w-full rounded-lg flex items-center gap-1">
                <img src="/search.svg" alt="search" />
                <input
                    type="text"
                    value={query}
                    onChange={handleSearchInputChange}
                    placeholder="Search"
                    className="flex-1 bg-white p-2 focus:outline-none"
                />
            </div>
            <div className="mt-6">
                {books.map((item, index) => {
                    if (books.length === index + 1) {
                        return (
                            <div
                                ref={lastBookElementRef}
                                key={index}
                                className="font-bold p-4 mb-2 flex justify-between bg-white border-b-2 border-[#f17a37] rounded-lg"
                            >
                                <div className="truncate">{item.title}</div>
                                <div>{item.first_publish_year}</div>
                            </div>
                        )
                    } else {
                        return (
                            <div
                                key={index}
                                className="font-bold p-4 mb-2 flex justify-between bg-white border-b-2 border-[#f17a37] rounded-lg"
                            >
                                <div className="truncate">{item.title}</div>
                                <div>{item.first_publish_year}</div>
                            </div>
                        )
                    }
                })}

                {loading && (
                    <div className="animate-pulse w-full p-4 bg-white rounded-lg flex items-center justify-between">
                        <p className="md:w-40 w-20 h-2 rounded-full bg-gray-300"></p>
                        <p className="font-bold text-gray-400 text-lg">
                            Loading...
                        </p>
                        <p className="md:w-40 w-20 h-2 rounded-full bg-gray-300"></p>
                    </div>
                )}
                {error && <div className="font-bold">Error...</div>}
                {!loading && books.length === 0 && (
                    <div className="font-bold">
                        No Data, search for a book to get results.
                    </div>
                )}
            </div>
        </section>
    )
}

export default App
