import React, { useState, useEffect } from "react"

function App() {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [jobIndex, setJobIndex] = useState(0)

    const apiUrl = "https://course-api.com/react-tabs-project"

    const fetchJobs = async () => {
        const response = await fetch(apiUrl)
        const data = await response.json()
        setJobs(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    return (
        <>
            <h1>Work Experience</h1>
            {!loading ? (
                <main>
                    <div className="left">
                        {jobs.map((item, index) => {
                            return (
                                <button onClick={() => setJobIndex(index)} key={item.id} className={`${index === jobIndex && "btn-active"}`}>
                                    {item.company}
                                </button>
                            )
                        })}
                    </div>
                    <div className="right">
                        <h2>{jobs[jobIndex].title}</h2>
                        <h3>{jobs[jobIndex].company}</h3>
                        <p>{jobs[jobIndex].dates}</p>
                        <ul>
                            {jobs[jobIndex].duties.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                </main>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </>
    )
}

export default App
