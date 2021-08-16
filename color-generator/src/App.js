import React, { useState } from "react"
import Values from "values.js"

const ColorBlock = props => {
    const rgbString = props.color.rgb.join(",")
    return (
        <div className="color-tile" style={{ background: `rgb(${rgbString})` }}>
            <div>{props.color.hex}</div>
            <div>{props.color.weight}</div>
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
        <div className="wrapper">
            <h3>Color Shade Generator</h3>
            <p>Enter a color code to get its different shades. Ex : #e74c3c, #27ae60 </p>

            <form className="form" onSubmit={handleSubmit}>
                <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} placeholder="Hex Color Code" />
                <button type="submit">Generate</button>
            </form>
            {error ? <span className="error">Invalid Color Code</span> : null}
            <div className="colors-container">
                {colorShades &&
                    !error &&
                    colorShades.map((color, index) => {
                        return <ColorBlock key={index} color={color} />
                    })}
            </div>
        </div>
    )
}

export default App
