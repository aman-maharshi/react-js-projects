import React, { useState, useEffect } from "react"

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
        <div>
            {toursData.length ? (
                toursData.map(item => {
                    return (
                        <p key={item.id} id={item.id}>
                            {item.name}
                        </p>
                    )
                })
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default App
