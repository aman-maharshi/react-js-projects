import React, { useState, useEffect } from "react"

function DateTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [date] = useState(new Date().toLocaleDateString())

    setTimeout(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000)

    return (
        <div className="date-time">
            <p>Date: {date}</p>
            <p>Time: {time}</p>
        </div>
    )
}

export default DateTime
