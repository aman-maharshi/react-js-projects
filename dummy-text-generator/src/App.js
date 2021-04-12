import React, { useState } from "react"
import data from "./data"

function App() {
    const [text, setText] = useState([])
    const [paragraphCount, setParagraphCount] = useState(0)

    const generateParagraphs = e => {
        e.preventDefault()
        setText(data.slice(0, paragraphCount))
    }
    return (
        <div>
            <form onSubmit={generateParagraphs}>
                <p>Select the number of paragraphs you want</p>
                <div className="inputbox">
                    <input type="range" min="0" max="9" value={paragraphCount} onChange={e => setParagraphCount(e.target.value)} />
                    <span>{paragraphCount}</span>
                    <button type="submit">Generate</button>
                </div>
            </form>
            <div className="result">
                {text.map((paragraph, index) => {
                    return <p key={index}>{paragraph}</p>
                })}
            </div>
        </div>
    )
}

export default App
