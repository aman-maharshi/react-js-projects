import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../components/Header"

function SingleMovie() {
    let { movieId } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getMovieData()
    }, [])

    async function getMovieData() {
        setLoading(true)
        try {
            const response = await fetch(
                `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_ID}&i=${movieId}`
            )
            const data = await response.json()
            // console.log(data)
            setMovie(data)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <>
            <Header />
            <div className="p-4 md:w-8/12 m-auto">
                {loading ? (
                    <div className="font-bold text-xl">Loading...</div>
                ) : (
                    <div className="p-4 flex flex-col gap-4">
                        <div className="sm:h-1/3 h-80 w-80 mx-auto">
                            <img
                                src={movie?.Poster}
                                alt={movie?.Title}
                                className="h-full w-full object-cover object-top"
                            />
                        </div>

                        <h2 className="font-bold text-2xl text-yellow-500">
                            {movie?.Title} ({movie?.Year})
                        </h2>

                        <div className="grid md:grid-cols-3 justify-between gap-4">
                            <div>
                                <div className="font-bold text-yellow-500">
                                    Genre
                                </div>
                                <div>{movie?.Genre}</div>
                            </div>
                            <div>
                                <div className="font-bold text-yellow-500">
                                    Running Time
                                </div>
                                <div>{movie?.Runtime}</div>
                            </div>
                            <div>
                                <div className="font-bold text-yellow-500">
                                    Rating
                                </div>
                                <div>{movie?.Ratings[0]?.Value}</div>
                            </div>
                        </div>

                        <div>
                            <div className="font-bold text-yellow-500">
                                Plot
                            </div>
                            <div>{movie?.Plot}</div>
                        </div>

                        <div>
                            <div className="font-bold text-yellow-500">
                                Actors
                            </div>
                            <div>{movie?.Actors}</div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default SingleMovie
