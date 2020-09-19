import React, { useState, useRef, useEffect } from "react"
import LikeArea from "./LikeArea"
import DateTime from "./DateTime"

function App() {
    const [items, setItems] = useState(["Go to Gym", "Play Tennis", "Study"])
    const inputValue = useRef()

    useEffect(() => {
        inputValue.current.focus()
    }, [])

    function UserInput() {
        function handleSubmit(e) {
            e.preventDefault()
            let val = inputValue.current.value
            if (val !== "") {
                setItems(prev => prev.concat(val))
                console.log(items.length)
            }
            inputValue.current.value = ""
        }

        return (
            <form onSubmit={handleSubmit} className="input-form">
                <input type="text" ref={inputValue} />
                <input type="submit" value="Add" />
            </form>
        )
    }

    function List() {
        return (
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        )
    }

    return (
        <div className="container">
            <h1>React Practice App #1</h1>
            <DateTime />
            <LikeArea />
            <UserInput />
            <List />
        </div>
    )
}

export default App
