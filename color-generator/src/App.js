import React, { useState } from "react"
import Values from "values.js"

const ColorBlock = props => {
    const { color, index } = props
    let textColor = index > 4 ? "white" : "black"

    return (
        <div className="color-tile" style={{ background: `#${color.hex}`, color: textColor }}>
            <div>#{color.hex}</div>
            <div>{color.weight} %</div>
        </div>
    )
}

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
                    <p>Enter a color code to get its different shades. Ex : #27ae60 </p>

                    <form className="form" onSubmit={handleSubmit}>
                        <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} placeholder="Hex Color Code" />
                        <button type="submit">Generate</button>
                        {error ? <div className="error">Invalid Color Code</div> : null}
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
