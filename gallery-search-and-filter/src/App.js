import { useState, useEffect } from "react"

const App = () => {
    const [data, setData] = useState(null)
    const [dataCopy, setDataCopy] = useState(null)
    const [genderSelectValue, setGenderSelectValue] = useState("")

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const apiResponse = await fetch("https://randomuser.me/api/?results=12")
        const apiData = await apiResponse.json()
        setData(apiData.results)
        setDataCopy(apiData.results)
    }

    const handleGenderFilterChange = e => {
        const allItems = [...dataCopy]
        setGenderSelectValue(e.target.value)
        if (e.target.value === "male") {
            setData(allItems.filter(user => user.gender === "male"))
        } else if (e.target.value === "female") {
            setData(allItems.filter(user => user.gender === "female"))
        } else {
            setData(dataCopy)
        }
    }

    return (
        <div className="page">
            <h2 className="pageTitle">People</h2>
            <div className="pageOptions">
                <select name="gender" value={genderSelectValue} onChange={handleGenderFilterChange}>
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="pageContent">
                {data ? (
                    data.map((user, userIndex) => {
                        const { name, location, email, picture, gender } = user
                        return (
                            <div key={userIndex} className="card">
                                <div className="cardLeft">
                                    <p>{name.first + " " + name.last}</p>
                                    <p>{location.city + ", " + location.country}</p>
                                    <p>{email}</p>
                                </div>
                                <div className="cardRight">
                                    <img src={picture.medium} alt="profile-pic" className={gender === "male" ? "maleHighlight" : "femaleHighlight"} />
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="spinner"></div>
                )}
            </div>
        </div>
    )
}

export default App
