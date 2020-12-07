import React, { useState, useEffect } from "react"
import Tour from "./Tour"

function App() {
    const [toursData, setToursData] = useState([])
    const [loading, setLoading] = useState(false)

    const dataUrl = "https://course-api.com/react-tours-project"

    const getData = async () => {
        setLoading(true)
        const response = await fetch(dataUrl)
        const data = await response.json()
        setToursData(data)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="wrapper">
            <h1 className="title">Tours</h1>
            <div className="tour-container">
                {!loading ? (
                    toursData.map(item => {
                        return <Tour key={item.id} id={item.id} tour={item} toursData={toursData} setToursData={setToursData} reloadData={getData} />
                    })
                ) : (
                    <p className="loading">Loading...</p>
                )}
            </div>
        </div>
    )
}

export default App
