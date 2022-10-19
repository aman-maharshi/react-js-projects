import { useState, useMemo } from "react"

const App = () => {
    const [players, setPlayers] = useState([
        "Roger Federer",
        "Rafael Nadal",
        "Novak Djokovic",
        "Andy Murray",
        "Daniil Medvedev",
        "Alexander Zverev",
        "Stefenos Tsitsipas",
        "Carlos Alcaraz",
        "Casper Ruud",
        "Andrey Rublev",
        "Hubert Hurkacz",
        "Jannik Sinner",
    ])

    const [searchInput, setSearchInput] = useState("")

    // WITHOUT USING USEMEMO
    // const filteredPlayers = players.filter((item) => {
    //     return item
    //         .toLocaleLowerCase()
    //         .includes(searchInput.toLocaleLowerCase())
    // })

    const filteredPlayers = useMemo(() => {
        return players.filter((item) => {
            return item
                .toLocaleLowerCase()
                .includes(searchInput.toLocaleLowerCase())
        })
    }, [players, searchInput])

    return (
        <div className="p-4 md:w-8/12 mx-auto">
            <h1 className="text-3xl font-bold my-4 md:my-6">Players</h1>
            <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="p-4 border shadow-xl md:w-6/12 w-full text-lg rounded-lg"
                placeholder="Search..."
            ></input>

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-8">
                {filteredPlayers.map((item, index) => {
                    return (
                        <div className="p-4 rounded-lg bg-white w-full flex items-center gap-2">
                            <div className="bg-gray-200 rounded-full h-10 w-10"></div>
                            <div className="font-bold">{item}</div>
                        </div>
                    )
                })}
            </div>
            {searchInput && filteredPlayers.length === 0 && (
                <p className="font-bold">
                    No results found for <u>{searchInput}</u>
                </p>
            )}
        </div>
    )
}

export default App
