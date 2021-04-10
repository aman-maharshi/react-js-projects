import React, { useState } from "react"

function App() {
    const [words, setWords] = useState(["Lorem.", "Lorem, ipsum.", "Lorem, ipsum dolor.", "Lorem ipsum dolor sit.", "Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet consectetur.", "Lorem ipsum dolor sit amet consectetur adipisicing."])
    const [length, setLength] = useState(0)
    return (
        <div>
            <form>
                <p>Select a Length</p>
                <div className="inputbox">
                    <input type="range" min="0" max="7" value={length} onChange={e => setLength(e.target.value)} />
                    <span>{length}</span>
                </div>
            </form>
            <div className="result">{length ? words[length - 1] : null}</div>
        </div>
    )
}

export default App
