import React, { useState, useEffect } from "react"
import Tour from "./Tour"

function App() {
    const [loading, setLoading] = useState(false)
    const [toursData, setToursData] = useState([])

    const dataUrl = "https://course-api.com/react-tours-project"

    const getData = async () => {
        setLoading(true)
        try {
            const response = await fetch(dataUrl)
            const data = await response.json()
            setToursData(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="wrapper">
            <h1 className="title">Tours</h1>
            <div className="tour-container">
                {!loading ? (
                    toursData.length ? (
                        toursData.map(item => {
                            return <Tour key={item.id} id={item.id} tour={item} toursData={toursData} setToursData={setToursData} />
                        })
                    ) : (
                        <button className="tours__button" onClick={() => getData()}>
                            Reload
                        </button>
                    )
                ) : (
                    <p className="loading">Loading...</p>
                )}
            </div>
        </div>
    )
}

export default App
