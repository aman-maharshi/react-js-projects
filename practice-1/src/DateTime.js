import React, { useState, useEffect } from "react"

function DateTime() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [time])

    return (
        <div className="DateTime">
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>Time: {time}</p>
        </div>
    )
}

export default DateTime
