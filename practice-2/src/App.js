import React, { useState } from "react"
import "./index.css"

// Components
import DateTime from "./DateTime"
import LikeArea from "./LikeArea"
import AddTodo from "./AddTodo"

function TodoItem({ todo }) {
    return <li className="TodoItem">{todo}</li>
}

function App() {
    const [todos, setTodos] = useState(["Practice  Web Programming", "Practice Guitar", "Go to Gym"])

    return (
        <div className="App">
            <h1>Practice App #2</h1>
            <DateTime />
            <AddTodo setTodos={setTodos} />
            <ul className="TodoList">
                {todos.map(item => {
                    return <TodoItem todo={item} key={Math.floor(Math.random() * 1000)} />
                })}
            </ul>
            <LikeArea />
        </div>
    )
}

export default App
