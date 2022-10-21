import { useState, useEffect } from "react"
import axios from "axios"

const useBookSearch = (query, pageNumber) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [books, setBooks] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setBooks([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        let unmounted = false
        let source = axios.CancelToken.source()
        axios({
            method: "GET",
            url: "http://openlibrary.org/search.json",
            params: { q: query, page: pageNumber },
            cancelToken: source.token,
        })
            .then((res) => {
                if (!unmounted) {
                    console.log(res.data)
                    setBooks((prevBooks) => {
                        return [...new Set([...prevBooks, ...res.data.docs])]
                    })
                    setHasMore(res.data.docs.length > 0)
                    setLoading(false)
                }
            })
            .catch((e) => {
                if (!unmounted) {
                    setError(true)
                    setLoading(false)
                    if (axios.isCancel(e)) {
                        console.log(`request cancelled:${e.message}`)
                    } else {
                        console.log("another error happened:" + e.message)
                    }
                }
            })

        return function () {
            unmounted = true
            source.cancel("Cancelling in cleanup")
        }
    }, [query, pageNumber])

    return { loading, error, books, hasMore }
}

export default useBookSearch
