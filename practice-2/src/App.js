import React, { useState, useEffect } from "react"
import "./index.css"

// Components
import DateTime from "./DateTime"
import LikeArea from "./LikeArea"
import AddTodo from "./AddTodo"

function TodoItem({ todo, todos, setTodos }) {
    function handleRemoveItem(e) {
        e.preventDefault()
        const textWithX = e.target.parentElement.textContent
        const textItem = textWithX.substring(0, textWithX.length - 2)
        const index = todos.indexOf(textItem)
        /* const arr = [...todos] */
        const arr = JSON.parse(localStorage.getItem("todoItems"))
        arr.splice(index, 1)
        setTodos(arr)
    }

    return (
        <li className="TodoItem">
            {todo}{" "}
            <button onClick={handleRemoveItem} className="remove-item">
                X
            </button>
        </li>
    )
}

function App() {
    const [todos, setTodos] = useState(["Practice Guitar", "Go to Gym"])

    // run first time on refresh / page load
    useEffect(() => {
        if (localStorage.getItem("todoItems")) {
            setTodos(JSON.parse(localStorage.getItem("todoItems")))
        }
    }, [])

    // run everytime todos changes
    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todos))
    }, [todos])

    return (
        <div className="App">
            <h1>Practice App #2</h1>
            <DateTime />
            <AddTodo setTodos={setTodos} />
            <ul className="TodoList">
                {todos.map(item => {
                    return <TodoItem setTodos={setTodos} todo={item} todos={todos} key={Math.floor(Math.random() * 1000)} />
                })}
            </ul>
            <LikeArea />
        </div>
    )
}

export default App
