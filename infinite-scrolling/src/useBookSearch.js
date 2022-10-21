import { useState, useEffect } from "react"

const useBookSearch = (query, pageNumber) => {
    useEffect(() => {
        getData()
    }, [query, pageNumber])

    const getData = async () => {
        const response = await fetch(
            `http://openlibrary.org/search.json?q=one&page=1`
        )
        const content = await response.json()
        console.log(content)
    }

    return null
}

export default useBookSearch
