import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import useDebounce from "../hooks/useDebounce"
import Header from "../components/Header"

function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const [searchInput, setSearchInput] = useState("")

    const debouncedSearchValue = useDebounce(searchInput, 700)

    useEffect(() => {
        getListingData()
    }, [])

    useEffect(() => {
        if (debouncedSearchValue.length > 0) {
            getSearchResults(debouncedSearchValue)
        } else {
            getListingData()
        }
    }, [debouncedSearchValue])

    async function getListingData() {
        setLoading(true)
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_ID}&s=marvel`)
            const data = await response.json()
            setMovies(data.Search)
            setError(false)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    async function getSearchResults(query) {
        setLoading(true)
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_ID}&s=${query}`)
            const data = await response.json()

            if (data.Response === "False") {
                setError(true)
                setErrorMessage(data.Error)
                setMovies([])
            } else {
                setError(false)
                setMovies(data.Search)
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <>
            <Header />
            <div className="p-4 md:w-8/12 m-auto">
                <input type="text" placeholder="Search..." className="p-4 rounded-md w-full text-lg text-black" onChange={e => setSearchInput(e.target.value.toLowerCase())} />
            </div>
            <div className="p-4 md:w-8/12 m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
                {loading ? (
                    <div className="font-bold text-xl">Loading...</div>
                ) : (
                    movies?.map((item, index) => {
                        const { Poster, Title, Year, imdbID } = item
                        return (
                            <Link to={`/movie/${imdbID}`} key={index} className="p-4 rounded-md bg-gray-800">
                                <img src={Poster} alt={Title} className="h-64 w-full rounded-md object-cover object-top" />
                                <h3 className="font-bold my-4">{Title}</h3>
                            </Link>
                        )
                    })
                )}
            </div>
            {error && !loading && <p className="font-bold text-lg my-4 text-center text-red-400">{errorMessage}</p>}
        </>
    )
}

export default Home
