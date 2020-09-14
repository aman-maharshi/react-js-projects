import React, { useState, useRef, useEffect } from "react"
import Todolist from "./components/TodoList"
import { v4 as uuid } from "uuid"
import "../src/index.css"

function App() {
    const [todo, setTodo] = useState([])
    const todoItemRef = useRef()

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem("todo"))
        if (items) {
            setTodo(items)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo))
    }, [todo])

    function handleAddTodo(e) {
        const itemName = todoItemRef.current.value
        if (itemName === "") return
        setTodo(prev => {
            return [...prev, { id: uuid(), task: itemName, complete: false }]
        })
        todoItemRef.current.value = null
    }

    function handleClear() {
        localStorage.removeItem("todo")
        setTodo([])
    }

    function toggleTodo(findId) {
        let todoCopy = [...todo]
        let selectedItem = todoCopy.find(item => item.id === findId)
        selectedItem.complete = !selectedItem.complete
        setTodo(todoCopy)
    }

    return (
        <div className="todoContainer">
            <input ref={todoItemRef} type="text" />
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleClear}>Clear All</button>
            <Todolist todo={todo} toggleTodo={toggleTodo} />
        </div>
    )
}

export default App
