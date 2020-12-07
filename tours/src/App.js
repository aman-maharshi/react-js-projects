import React, { useState, useEffect } from "react"
import Tour from "./Tour"

function App() {
    const [toursData, setToursData] = useState([])

    const dataUrl = "https://course-api.com/react-tours-project"

    const getData = async () => {
        const response = await fetch(dataUrl)
        const data = await response.json()
        setToursData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="wrapper">
            <h1 className="title">Available Tours</h1>
            <div className="tour-container">
                {toursData.length ? (
                    toursData.map(item => {
                        return <Tour key={item.id} id={item.id} tour={item} />
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default App