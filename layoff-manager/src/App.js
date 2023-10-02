import { useState } from "react"
import Card from "./Card"

import teamData from "./data"

const App = () => {
    const [teams, setTeams] = useState(teamData)

    const handleSelectTeam = e => {
        // console.log(e.target.checked, e.target.name)
        const updatedList = teams.map(item => {
            if (e.target.name === item.name) {
                return {
                    ...item,
                    selected: !item.selected
                }
            } else {
                return item
            }
        })
        setTeams(updatedList)
    }

    const selectedCheck = () => {
        let check = false
        teams.forEach(item => {
            if (item.selected) {
                check = true
            }
        })
        return check
    }

    const totalLayoffs = () => {
        const sum = teams.reduce((partialSum, item) => partialSum + item.layoffs, 0)
        return sum
    }

    return (
        <div className="w-3/5 mx-auto p-4 mt-10 rounded-lg bg-stone-100">
            <h2 className="font-bold text-2xl mb-4 text-slate-700">Teams</h2>
            <div className="text-xl flex flex-wrap gap-4 mb-8">
                {teams.map((item, index) => {
                    return (
                        <div key={index} className={item.selected ? "flex gap-2 py-2 px-4 bg-yellow-400 rounded-full shadow-sm" : "flex gap-2 py-2 px-4 bg-white rounded-full shadow-sm"}>
                            <input hidden type="checkbox" name={item.name} checked={item.selected} onChange={handleSelectTeam} id={item.name} />
                            <label htmlFor={item.name} className="cursor-pointer">
                                {item.name}
                            </label>
                        </div>
                    )
                })}
            </div>
            {selectedCheck() && (
                <>
                    <div className="flex gap-2 items-center mb-4">
                        <h2 className="font-bold text-2xl text-slate-700">Requirements</h2>
                        {totalLayoffs() > 0 && <div className="border border-gray-300 rounded-full w-10 bg-white text-center text-orange-500 font-bold">{totalLayoffs()}</div>}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {teams.map((item, index) => {
                            if (item.selected) {
                                return <Card key={index} item={item} teams={teams} setTeams={setTeams} />
                            }
                        })}
                    </div>
                </>
            )}
        </div>
    )
}

export default App
