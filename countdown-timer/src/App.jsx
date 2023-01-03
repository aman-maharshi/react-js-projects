import { useState, useEffect } from "react"

const App = () => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const [secondsInterval, setSecondsInterval] = useState()
    const [timerStarted, setTimerStarted] = useState(false)

    useEffect(() => {
        if (timerStarted) {
            if (hours) {
                if (minutes == 0) {
                    setMinutes(59)
                    setHours(prev => prev - 1)
                    // console.log("17")
                } else {
                    if (seconds == 0) {
                        // console.log("20")
                        setSeconds(59)
                        setMinutes(prev => prev - 1)
                    }
                }
            } else {
                if (minutes) {
                    if (seconds == 0) {
                        setSeconds(59)
                        setMinutes(prev => prev - 1)
                    }
                } else {
                    if (seconds == 0) {
                        handleResetTimer()
                    }
                }
            }
        }
    }, [timerStarted, hours, minutes, seconds])

    const handleStartTimer = () => {
        if (seconds > 0) {
            const interval = setInterval(() => {
                setTimerStarted(true)
                setSeconds(prev => prev - 1)
            }, 1000)
            setSecondsInterval(interval)
        }
    }

    const handlePauseTimer = () => {
        clearInterval(secondsInterval)
        setTimerStarted(false)
    }

    const handleResetTimer = () => {
        clearInterval(secondsInterval)
        setTimerStarted(false)
        setSeconds(0)
        setMinutes(0)
    }

    return (
        <div className="container">
            <h1>Countdown Timer</h1>
            <div className="timerRow">
                <p className="time-title">Hours</p>
                <p className="time-title">Minutes</p>
                <p className="time-title">Seconds</p>
            </div>
            <div className="timerRow">
                <input type="number" value={hours} onChange={e => setHours(e.target.value.slice(0, 2))} />
                <input type="number" value={minutes} onChange={e => setMinutes(e.target.value.slice(0, 2))} />
                <input type="number" value={seconds} onChange={e => setSeconds(e.target.value.slice(0, 2))} />
            </div>
            <div className="buttonRow">
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
