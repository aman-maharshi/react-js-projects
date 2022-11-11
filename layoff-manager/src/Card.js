import React from "react"

const Card = ({ item, teams, setTeams }) => {
    const handleSliderChange = e => {
        const updatedList = teams.map(mapItem => {
            if (e.target.name === mapItem.name) {
                return {
                    ...mapItem,
                    layoffs: Number(e.target.value)
                }
            } else {
                return mapItem
            }
        })

        setTeams(updatedList)
    }

    return (
        <div className="bg-slate-200 shadow-lg rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center">
                <p className="text-lg mb-2">{item.name}</p>
                <p className="rounded-full w-10 bg-white text-center text-orange-500 font-bold select-none">{item.layoffs}</p>
            </div>
            <input type="range" min="0" max="10" value={item.layoffs} onChange={handleSliderChange} name={item.name} className="w-full" />
        </div>
    )
}

export default Card
