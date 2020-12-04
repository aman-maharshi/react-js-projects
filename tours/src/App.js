import React, { useState, useEffect } from "react"

function App() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    const dataUrl = "https://course-api.com/react-tours-project"

    useEffect(() => {
        fetch(dataUrl)
            .then(response => response.json())
            .then(result => {
                setLoading(true)
                setData(result)
            })
    }, [])

    return (
        <div>
            <p>Hi</p>
            {loading ? console.log(data) : "Loading..."}
        </div>
    )
}

export default App
