import React, { useState } from "react"

function AddTodo({ setTodos }) {
    const [todoItem, setTodoItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setTodos(prev => prev.concat(todoItem))
        setTodoItem("")
    }

    function handleInputChange(e) {
        if (e.target.value !== "") {
            setTodoItem(e.target.value)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="AddTodo">
            <input value={todoItem} onChange={handleInputChange} type="text" placeholder="What tasks are on you mind?" />
            <button>Add Todo</button>
        </form>
    )
}

export default AddTodo
