import React, { useState } from "react"

function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [date] = useState(new Date().toLocaleDateString())
    const [items] = useState(["Go to Gym", "Play Tennis", "Study"])

    function Header() {
        return <h1>React Practice App #1</h1>
    }

    function List() {
        return (
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        )
    }

    function SectionDateTime() {
        /*
        setTimeout(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        */

        return (
            <div className="date-time">
                <p>Date: {date}</p>
                <p>Time: {time}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <Header />
            <SectionDateTime />
            <List />
        </div>
    )
}

export default App
