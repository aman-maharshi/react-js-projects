import { useState, useEffect } from "react"

const App = () => {
    const [hours, setHours] = useState("")
    const [minutes, setMinutes] = useState("")
    const [seconds, setSeconds] = useState("")

    const [timerInterval, setTimerInterval] = useState()
    const [timerStarted, setTimerStarted] = useState(false)

    const handleStartTimer = () => {
        if (seconds) {
            const interval = setInterval(() => {
                setSeconds(prev => prev - 1)
            }, 1000)

            setTimerInterval(interval)
        }
    }

    const handlePauseTimer = () => {
        setTimerStarted(false)
    }

    const handleResetTimer = () => {
        clearInterval(timerInterval)
        setSeconds(0)
    }

    return (
        <div className="container">
            <h1>Countdown Timer</h1>
            <div className="timerRow">
                <p>Hours</p>
                <p>Minutes</p>
                <p>Seconds</p>
            </div>
            <div className="timerRow">
                <input type="number" placeholder="00" value={hours} onChange={e => setHours(e.target.value.slice(0, 2))} />
                <input type="number" placeholder="00" value={minutes} onChange={e => setMinutes(e.target.value.slice(0, 2))} />
                <input type="number" placeholder="00" value={seconds} onChange={e => setSeconds(e.target.value.slice(0, 2))} />
            </div>
            <div className="buttonsRow">
                {!timerStarted ? (
                    <>
                        <button onClick={handleStartTimer}>Start</button>
                    </>
                ) : (
                    <button onClick={handlePauseTimer}>Pause</button>
                )}
                <button onClick={handleResetTimer}>Reset</button>
            </div>
        </div>
    )
}

export default App
