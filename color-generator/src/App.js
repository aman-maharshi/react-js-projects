import React, { useState } from "react"

function App() {
    const [userInput, setUserInput] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        try {
            console.log(userInput)
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
            <div>{/* {colorShades.map(color => {
                    return (
                        <ul>
                            <li>{color.hex}</li>
                        </ul>
                    )
                })} */}</div>
        </div>
    )
}

export default App
