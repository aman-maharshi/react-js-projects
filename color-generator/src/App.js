import React, { useState } from "react"
import Values from "values.js"
import ColorBlock from "./ColorBlock"

function App() {
    const [userInput, setUserInput] = useState("")
    const [error, setError] = useState(false)
    const [colorShades, setColorShades] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        try {
            const color = new Values(userInput)
            setColorShades(color.all(20))
            setError(false)
        } catch (e) {
            console.log(e)
            setError(true)
        }
    }

    return (
        <>
            <div className="page-content">
                <div className="wrapper">
                    <h3>Color Shade Generator</h3>
                    <p>Enter a color to get its different shades.</p>
                    <p className="acceptable-formats">Acceptable color formats - Hex, RGB, Color Name</p>

                    <form className="form" onSubmit={handleSubmit}>
                        <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} placeholder="Color" />
                        <button type="submit">Generate</button>
                        {error ? <div className="error">Invalid Color</div> : null}
                    </form>

                    <div className="colors-container">
                        {colorShades &&
                            !error &&
                            colorShades.map((color, index) => {
                                return <ColorBlock key={index} color={color} index={index} />
                            })}
                    </div>
                </div>
            </div>
            <footer>
                <p>
                    Designed and Coded by <a href="https://www.linkedin.com/in/amanmaharshi/">Aman Maharshi</a>
                </p>
            </footer>
        </>
    )
}

export default App
